import PostContent from "@/components/blog/post-content";
import { getPostData, getPostsFiles } from "@/helpers/posts-utils";
import Image from "next/image";

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

const PostDetail = ({ post }: props) => {
  const postImageUrl = `/images/posts/${post.slug}/${post.image}`;

  return (
    <div className="flex flex-col items-center gap-8 m-8">
      <h1>{post.title}</h1>
      <div className="flex flex-col items-center gap-4">
        <div>
          <Image src={postImageUrl} alt={post.title} width={500} height={500} />
        </div>
        <div className="max-w-4xl">
          <PostContent post={post} />
        </div>
      </div>
    </div>
  );
};

export function getStaticProps(context: { params: any }) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetail;
