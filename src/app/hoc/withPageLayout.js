// HOC component "withPageLayout.js"
import React from "react";
import Layout from "../layout";
import Retailboard from "../Components/RetailDashboard/page";

const withPageLayout = (WrappedComponent) => {
  return () => (
    <div className="flex w-full">
      <Retailboard />
      <WrappedComponent />
    </div>
  );
};

export default withPageLayout;
