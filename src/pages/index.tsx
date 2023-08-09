import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 23, "3"),
    new Cliente("Daniel", 54, "4"),
    new Cliente("Gui", 19, "5"),
    new Cliente("Rebeca", 29, "6"),
    new Cliente("Pedro", 65, "7"),
    new Cliente("Gustavo", 32, "8"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {}

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-emerald-600 to-sky-600">
      <Layout titulo="Usuários cadastrados">
        <Botao className="mb-4">Novo usuário</Botao>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </main>
  );
}
