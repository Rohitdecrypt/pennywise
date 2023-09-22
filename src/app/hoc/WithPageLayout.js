// HOC component "WithPageLayout.js"
"use client";
import React from "react";
import Layout from "../layout";
import Retailboard from "../Components/RetailDashboard/Page";

const WithPageLayout = (WrappedComponent) => {
  return (
    <div className="flex w-full">
      <Retailboard />
      <WrappedComponent />
    </div>
  );
};

export default WithPageLayout;
