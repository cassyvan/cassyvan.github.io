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

const PostContent = ({ post }: props) => {
  return <div>{post.content}</div>;
};

export default PostContent;
