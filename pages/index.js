import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import Post from "../components/Post";
import Layout from "../components/Layout";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: { posts: posts.sort(sortByDate).slice(0, 6) },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-4 font-bold">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, idx) => (
          <Post key={idx} post={post} />
        ))}
      </div>
      <Link
        href="/blog"
        className="block text-center border border-blue-900 text-indigo-900 py-4 my-4 rounded-md hover:bg-blue-900 hover:text-white focus:outline-none focus:shadow-outline"
      >
        {" "}
        All Posts
      </Link>
    </Layout>
  );
}
