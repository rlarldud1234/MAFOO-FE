import { Global } from "@emotion/react";
import { GlobalStyle } from "@/styles/global";

const Main = () => {
  return (
    <div>
      <Global styles={GlobalStyle} />
      <h1>MAFOO</h1>
    </div>
  );
};

export default Main;
