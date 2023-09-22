// Page.js
import React from "react";
import RegisterScreen1 from "./RegisterScreen1/page";
import Webstore from "./Webstore/Page";
import Retailboard from "./Components/RetailDashboard/Page";

export default function Home({ children }) {
  return (
    <main>
      <RegisterScreen1 />
      {children}
    </main>
  );
}
