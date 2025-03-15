import { Global } from "@emotion/react";
import { GlobalStyle } from "@/styles/global";
import Header from "@/components/header/Header";

const Main = () => {
  return (
    <div style={{ backgroundColor: "#DADADA" }}>
      <Global styles={GlobalStyle} />
      <Header />
      <h1>MAFOO</h1>
    </div>
  );
};

export default Main;
