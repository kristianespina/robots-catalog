import React from "react";

interface IMainHeader {
  children?: JSX.Element | JSX.Element[];
}

const MainHeader = ({ children }: IMainHeader) => {
  return (
    <header className="py-8 text-right bg-white mb-12 sm:mb-16">
      {children}
    </header>
  );
};

export default MainHeader;
