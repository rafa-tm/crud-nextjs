interface BotaoProps {
  className?: string;
  children: any;
  cor: "green" | "blue";
  onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
  function handleCor() {
    switch (props.cor) {
      case "green":
        return "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500";
      case "blue":
        return "bg-sky-600 hover:bg-sky-700 focus:ring-sky-500";
      default:
        return "";
    }
  }

  return (
    <button
      className={`bg-emerald-600 text-white px-4 py-2 rounded-md text-lg font-bold ${
        props.className
      } ${handleCor()}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
