import React, { ReactElement } from "react";
import "./Botao.css";

interface ButtonProps {
  children: ReactElement | string;
}

const Botao = (props: ButtonProps) => {
  return <button className="botao">{props.children}</button>;
};

export default Botao;
