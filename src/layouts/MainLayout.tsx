import React from "react";

interface IMainLayout {
  children?: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: IMainLayout) => {
  return <div className="w-screen">{children}</div>;
};

export default MainLayout;
