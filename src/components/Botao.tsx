interface BotaoProps {
  className?: string;
  children: any;
}

export default function Botao(props: BotaoProps) {
  return (
    <button
      className={`bg-emerald-600 text-white px-4 py-2 rounded-md text-lg font-bold ${props.className}`}
    >
      {props.children}
    </button>
  );
}
