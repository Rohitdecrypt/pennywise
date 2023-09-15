import React from "react";
import Layout from "../layout";
function withPageLayout(WrappedComponent) {
  return (props) => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
}

export default withPageLayout;
