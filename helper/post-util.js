import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const postslist = fs.readdirSync(path.join(process.cwd(), "posts"));
  const posts = postslist.map((post) => getPostDetail(post));
  return posts;
}

export function getFileContent(path) {
  const fileContent = fs.readFileSync(path, "utf-8");
  return fileContent;
}

export function getPostDetail(slug) {
  slug = slug.replace(/\.md$/, "");
  slug = slug.concat(".md");
  const filePath = path.join(process.cwd(), "posts", slug);
  const post = matter(getFileContent(filePath));
  return post;
}
