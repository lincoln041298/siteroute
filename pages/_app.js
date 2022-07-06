import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import "../scss/main.scss";
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
