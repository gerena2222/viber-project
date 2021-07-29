import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
const MainLayout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};
export default MainLayout;
