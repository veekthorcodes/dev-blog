import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {marked} from 'marked';

import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import CategoryLabel from "../../components/CategoryLabel";

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
};

const PostPage = ({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) => {
  return (
    <Layout>
      <Link
        href={`/blog`}
        className="font-bold text-gray-600 hover:text-blue-600"
      >{`< back`}</Link>

      <div className="bg-white px-8 py-4 rounded shadow-md">
        <div className="flex justify-between my-4 items-center">
          <h1 className="font-bold md:text-3xl">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>

        <img src={cover_image} alt="cover image" className="w-full rounded" />

        <div className="flex justify-between items-center p-2 mt-2 bg-gray-100 rounded-md">
          <div className="flex items-center">
            <Image
              src={author_image}
              width={30}
              height={30}
              alt="author image"
              className="rounded-full"
            />
            <p className="font-bold mx-3">{author}</p>
          </div>
          <p className="text-sm text-gray-500 font-light">{date}</p>
        </div>

        <div className="blog-text mt-2">
          <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
