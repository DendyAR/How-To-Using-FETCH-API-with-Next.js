import Navbar from "./Navbar";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <title>Next.js App </title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
