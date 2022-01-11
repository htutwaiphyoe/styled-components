import { ThemeProvider } from "styled-components";

import { Container } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global.styled";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import contents from "./assets/data/data";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  width: {
    xl: "1199px",
    md: "767px",
    sm: "575px",
    xs: "374px",
    lg: "992px",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {contents.map((content, i) => (
          <Card content={content} key={i} layout={(i + 1) % 2 === 0} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
