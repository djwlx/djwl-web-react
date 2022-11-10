import React, { FC, ReactElement } from "react";
import Header from "./Header";
import style from "./index.module.scss";

type LayoutProps = {
  children: ReactElement;
};

const ReactComponent: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default ReactComponent;
