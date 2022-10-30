import Layout from "../components/Layout";


const About = () => {
  return (
    <Layout title="About Page">

      <h1 className="border-b-2 text-6xl text-gray-500 shadow pb-4">About</h1>

      <div className="bg-white px-10 py-6 shadow-md rounded-2xl my-2">
        <h3 className="text-2xl mb-5">A blog for Development</h3>
        <p className="text">This blog is built with NextJS</p>
        <p className="font-bold">v1.0.0</p>
      </div>
    </Layout>
  )
}

export default About