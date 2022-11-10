import { RouteObject } from "react-router-dom";
import React, { lazy } from "react";

const Index = lazy(() => import("@/pages"));

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
];
