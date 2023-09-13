import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

const PostDetail = () => {
  const customRenderers = {
    paragraph(paragraph: any) {
      return <div></div>;
    },
    code(code: any) {
      const { language, value } = code;
      return <div></div>;
    },
  };
  return <article></article>;
};

export default PostDetail;
