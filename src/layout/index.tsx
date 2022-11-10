import React, { FC } from "react";
import { routers } from "./routes";
import { useRoutes } from "react-router-dom";
import "@/css/index.css";
import DefaultLayout from "@/component/DefaultLayout";

const App: FC = () => {
  return (
    <>
      <DefaultLayout>{useRoutes(routers)}</DefaultLayout>
    </>
  );
};

export default App;
