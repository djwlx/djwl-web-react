import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
const ReactComponent: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      hello
      <button onClick={() => navigate("/second")}>跳转</button>
    </div>
  );
};
export default ReactComponent;
