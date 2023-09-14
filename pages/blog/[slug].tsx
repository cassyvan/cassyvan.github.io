import PostContent from "@/components/blog/post-content";
import { getPostData, getPostsFiles } from "@/helpers/posts-utils";

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
  return (
    <div>
      <h1>{post.title}</h1>
      <PostContent post={post} />
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
