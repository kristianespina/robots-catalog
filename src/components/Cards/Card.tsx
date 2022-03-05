import React from "react";

interface ICard {
  children?: JSX.Element | JSX.Element[];
}
const Card = ({ children }: ICard) => {
  return <div className="bg-white rounded-lg px-6 py-6">{children}</div>;
};

export default Card;
