import { Global } from "@emotion/react";
import { GlobalStyle } from "@/styles/global";
import Header from "@/components/header/Header";
import MainPage from "./main/MainPage";
import React from "react";
import Footer from "@/components/footer/Footer";

const Main = () => {
  return (
    <div style={{ backgroundColor: "#DADADA", minWidth: "1440px" }}>
      <Global styles={GlobalStyle} />
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default Main;
