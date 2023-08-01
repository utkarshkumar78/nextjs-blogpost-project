import Image from "next/image";

import styles from "./PostDetail.module.css";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import VsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("js", js);

import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

const PostDetail = (props) => {
  const { content, data } = props.post;

  const customRender = {
    img({ src, alt }) {
      const imagePath = `/images/posts/${data.title
        .toLowerCase()
        .split(" ")
        .join("-")}/${src}`;

      return <Image src={imagePath} alt={alt} width="500" height="300" />;
    },
    code({ children, className }) {
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          language={language}
          children={children}
          style={VsDark}
        />
      );
    },
  };

  return (
    <div className={styles.container}>
      <PostHeader data={data} />
      <main>
        <ReactMarkdown components={customRender}>{content}</ReactMarkdown>
      </main>
    </div>
  );
};

export default PostDetail;
