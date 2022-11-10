import React, { FC } from "react";
import style from "./index.module.scss";
console.log(style);
const Header: FC = () => {
  return <div style={style.header}>我是头部</div>;
};
export default Header;
