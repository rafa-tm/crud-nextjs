import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  cancelado?: () => void;
  clienteMudou?: (cliente: Cliente) => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada texto="Código" tipo="text" valor={id} somenteLeitura />
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        tipo="text"
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />

      <div className="w-full flex items-center justify-center gap-4 pt-8">
        <Botao
          cor="green"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao cor="blue" onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
