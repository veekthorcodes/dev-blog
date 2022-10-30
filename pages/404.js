import Layout from "../components/Layout";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <Layout title="Page Not Found">
      <div className="flex flex-col items-center mt-20">
        <Image
          src={"/images/logo.png"}
          width={100}
          height={100}
          className="bg-gray-900 rounded-xl p-3"
        />
        <h1 className="text-6xl my-5">Woops!!!</h1>
        <p className="text-gray-500 text-2xl">This page does not exist</p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
