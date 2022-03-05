import React from "react";

interface IMainContainer {
  children?: JSX.Element | JSX.Element[];
}

// Centered container with maximum with of 6xl
const MainContainer = ({ children }: IMainContainer) => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 md:px-6">{children}</div>
  );
};

export default MainContainer;
