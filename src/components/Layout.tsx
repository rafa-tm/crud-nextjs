import React from "react";
import Titulo from "./Titulo";

interface LayoutProps {
  children: React.ReactNode;
  titulo?: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col w-2/3 text-gray-900 bg-white rounded-md">
      <Titulo>{props.titulo}</Titulo>
      <div className="p-6">{props.children}</div>
    </div>
  );
}
