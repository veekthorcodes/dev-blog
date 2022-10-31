import Layout from "../../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });
  console.log(posts);
  return {
    props: {posts},
  };
}

const BlogPage = () => {
  return <Layout>BlogPage</Layout>;
};

export default BlogPage;
