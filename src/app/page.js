// page.js
import React from "react";
import RegisterScreen1 from "./RegisterScreen1/page";
import Webstore from "./Webstore/page";
import Retailboard from "./Components/RetailDashboard/page";

export default function Home({ children }) {
  return (
    <main>
      <RegisterScreen1 />
      {children}
    </main>
  );
}
