import Image from "next/image";
import Link from "next/link";

import styles from "./PostItem.module.css";

export default function PostItem({ post }) {
  const postSlug = post.title.toLowerCase().split(" ").join("-");

  const imagePath = `/images/posts/${postSlug}/${post.image}`;

  return (
    <Link href={`/posts/${postSlug}`} className={styles.container}>
      <Image src={imagePath} alt={post.title} width="220" height="150" />
      <h4 className={styles["post-title"]}>{post.title}</h4>
      <div className={styles["post-excerpt"]}>{post.excerpt}</div>
    </Link>
  );
}
