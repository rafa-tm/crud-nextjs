interface EntradaProps {
  texto: string;
  tipo?: "text" | "number";
  valor: any;
  valorMudou?: (valor: any) => void;
  somenteLeitura?: boolean;
  className?: string;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`w-full flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`border border-sky-500 rounded-lg
                focus:outline-none bg-gray-100 px-4 py-2
                ${props.somenteLeitura ? "" : "focus:bg-white"}`}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  );
}
