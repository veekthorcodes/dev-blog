import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, title, keywords, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main className="container p-3 mx-auto mb-4 md:p-0">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Welcome to Dev Blog",
  keywords: "web development, programming",
  description: "Get the latest news in web dev",
};

export default Layout;
