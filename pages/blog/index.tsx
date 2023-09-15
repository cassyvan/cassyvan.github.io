import PostItem from "@/components/blog/post-item";
import { getAllPosts } from "@/helpers/posts-utils";

interface props {
  posts: {
    content: string;
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
  }[];
}

const BlogHomePage = ({ posts }: props) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="underline">Blog</h1>
      <div className="grid grid-cols-2  max-w-6xl h-[10rem]">
        {posts.map((post) => (
          <PostItem post={post} key={post.date} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default BlogHomePage;
