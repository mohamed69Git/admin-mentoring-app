// import { useState } from "react";
import { Layout } from "antd";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import SignUpIn from "./pages/SignUpIn";
import "./App.css";

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <HeaderPage />
      <SignUpIn />
      <FooterPage />
    </Layout>
  );
};

export default App;
