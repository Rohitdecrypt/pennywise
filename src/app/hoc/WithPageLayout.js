// HOC component "WithPageLayout.js"
"use client";
import React from "react";
import Layout from "../layout";
import Retailboard from "../Components/RetailDashboard/page";

const WithPageLayout = (WrappedComponent) => {
  const WithLayout = () => (
    <div className="flex w-full">
      <Retailboard />
      <WrappedComponent />
    </div>
  );

  // Add a display name to your component
  WithLayout.displayName = `WithPageLayout(${getDisplayName(WrappedComponent)})`;

  return WithLayout;
};

// Helper function to get the display name of the wrapped component
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WithPageLayout;
