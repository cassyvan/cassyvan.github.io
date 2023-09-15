import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface props {
  content: string;
}

const PostContent = ({ content }: props) => {
  return (
    <div>
      <ReactMarkdown className="flex flex-col gap-6 leading-loose">
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default PostContent;
