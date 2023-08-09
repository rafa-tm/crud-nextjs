import Cliente from "@/core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
                text-gray-100
                bg-gradient-to-r from-sky-500 to-sky-800
            `}
      >
        <tr className="text-center">
          <th className="px-4 py-2">Código</th>
          <th className="px-4 py-2">Nome</th>
          <th className="px-4 py-2">Idade</th>
          {exibirAcoes && <th className="px-4 py-2">Ações</th>}
        </tr>
      </thead>
      <tbody>
        {props.clientes?.map((cliente, i) => {
          return (
            <tr
              key={cliente.id}
              className={`${i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
            >
              <td className="text-center p-4">{cliente.id}</td>
              <td className="text-center p-4">{cliente.nome}</td>
              <td className="text-center p-4">{cliente.idade}</td>
              {exibirAcoes && (
                <td className="flex text-center p-4 items-center justify-center">
                  {props.clienteSelecionado && (
                    <button
                      onClick={() => props.clienteSelecionado?.(cliente)}
                      className="mr-6 hover:bg-emerald-400 rounded-full p-1"
                    >
                      {IconeEdicao}
                    </button>
                  )}
                  {props.clienteExcluido && (
                    <button
                      onClick={() => props.clienteExcluido?.(cliente)}
                      className="mr-6 hover:bg-emerald-400 rounded-full p-1"
                    >
                      {IconeLixo}
                    </button>
                  )}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
