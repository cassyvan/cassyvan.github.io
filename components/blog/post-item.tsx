import Image from "next/image";
import Link from "next/link";

interface props {
  post: {
    content: string;
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
  };
}

const PostItem = ({ post }: props) => {
  const postImageUrl = `/images/posts/${post.slug}/${post.image}`;
  const postLinkPath = `/blog/${post.slug}`;
  return (
    <div className="shadow-md max-w-5xl p-3 outline outline-dotted outline-1 outline-red-300 dark:outline-sky-300">
      <Link
        href={postLinkPath}
        className="flex justify-center items-center gap-4 outline outline-red-300 dark:outline-sky-300 p-1 rounded-md"
      >
        <Image
          src={postImageUrl}
          alt={post.title}
          width={100}
          height={100}
          className="rounded-full"
        />
        <h3 className="text-xl font-semibold">{post.title}</h3>
      </Link>
      <div className="text-center font-semibold">{post.date}</div>
      <div className="italic pt-2">{post.excerpt}</div>
    </div>
  );
};

export default PostItem;
