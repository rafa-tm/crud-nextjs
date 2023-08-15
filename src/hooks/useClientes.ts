import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/firebase/db/ColecaoCliente";
import { useState, useEffect } from "react";

export default function useClientes() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const repo: ClienteRepositorio = new ColecaoCliente();

  function obterTodosClientes() {
    repo.buscarTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodosClientes();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodosClientes();
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(obterTodosClientes, []);

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodosClientes,
    visivel,
    setVisivel,
  };
}
