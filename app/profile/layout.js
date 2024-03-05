import React, { children } from "react";
import { ReactNode } from "react";
import Profilenavbar from "./profilenavbar";
export default function Profilelayout({ children }) {
  return (
    <div>
      <Profilenavbar />
      {children}
    </div>
  );
}
