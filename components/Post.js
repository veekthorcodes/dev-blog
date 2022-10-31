import Image from "next/image";
import Link from "next/link";

import CategoryLabel from "./CategoryLabel";

const Post = ({ post }) => {
  return (
    <div className="bg-white-100 w-full rounded-lg py-5 px-8 shadow-lg my-3">
      <Image
        src={post.frontmatter.cover_image}
        width={420}
        height={600}
        className="mb-4 rounded"
        alt="blog image"
      />

      <div className="flex justify-between text-center">
        <span className="font-light text-gray-400">
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className="mt-2">
        <Link
          href={`/blog/${post.slug}`}
          className="font-bold text-xl hover:underline"
        >
          {post.frontmatter.title}
        </Link>
      </div>
      <p className="text-gray-500 mt-2">{post.frontmatter.excerpt}</p>

      <div className="flex justify-between items-center mt-6 text-sm">
        <Link
          href={`/blog/${post.slug}`}
          className="text-gray-800 font-bold hover:text-blue-500"
        >
          Read More...
        </Link>
        <div className="flex items-center">
          <Image
            src={post.frontmatter.author_image}
            width={30}
            height={30}
            className="hidden rounded-full object-cover mx-3 md:block"
            alt="author image"
          />
          <h3 className="font-bold">{post.frontmatter.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
