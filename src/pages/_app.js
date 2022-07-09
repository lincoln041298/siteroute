import "scss/Footer.module.scss";
import "scss/Header.module.scss";
import "scss/main.scss";
import Footer from "src/components/Footer/Footer";
import Header from "src/components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
      <main>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
  );
}

export default MyApp;
