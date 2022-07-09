import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Image from "next/image";
import "scss/main.scss";
import "scss/Header.module.scss";
import "scss/Footer.module.scss"
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
