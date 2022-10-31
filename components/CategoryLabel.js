import Link from "next/link";

const CategoryLabel = ({ children }) => {

  return (
    <Link href={`/blog/categories/${children.toLowerCase()}`} className="px-2 py-1 rounded text-sm font-bold text-gray-500 border">
      {children}
    </Link>
  );
};

export default CategoryLabel;
