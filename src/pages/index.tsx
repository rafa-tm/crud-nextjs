import Botao from "@/components/Botao";
import Formulario from "@/components/Fomulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import useClientes from "@/hooks/useClientes";
import { useEffect } from "react";

export default function Home() {
  const {
    cliente,
    clientes,
    visivel,
    setVisivel,
    novoCliente,
    obterTodosClientes,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
  } = useClientes();

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-emerald-600 to-sky-600">
      <Layout titulo="Usuários cadastrados">
        {visivel === "tabela" ? (
          <div className="flex flex-col items-end">
            <Botao cor="green" className="mb-4 w-fit" onClick={novoCliente}>
              Novo usuário
            </Botao>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </div>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </main>
  );
}
