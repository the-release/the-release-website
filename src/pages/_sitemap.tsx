import { GetStaticProps } from "next";
import { promises as fs } from "fs";
import path from "path";

import { HOST } from "../config";
import { getArticles } from "../services/article/article.service";
import { getCategories } from "../services/category/category.service";
import { getAuthors } from "../services/author/author.service";
import { Article } from "../services/article/article.entity";
import { Category } from "../services/category/category.entity";
import { Author } from "../services/author/author.entity";

const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");

// TODO: add proper last modification value
const articleEntry = (article: Article) => {
  const articleUrl = `${HOST}/article/${article.slug}`;

  return `  <url>
    <loc>${articleUrl}</loc>
    <lastmod>2020-05-04T14:26:06+00:00</lastmod>
    <priority>0.60</priority>
  </url>`;
};

const categoryEntry = (category: Category) => {
  const categoryUrl = `${HOST}/category/${category.slug}`;

  return `  <url>
    <loc>${categoryUrl}</loc>
    <lastmod>2020-05-04T14:26:06+00:00</lastmod>
    <priority>0.60</priority>
  </url>`;
};

const authorEntry = (author: Author) => {
  const authorUrl = `${HOST}/author/${author.slug}`;

  return `  <url>
    <loc>${authorUrl}</loc>
    <lastmod>2020-05-04T14:26:06+00:00</lastmod>
    <priority>0.60</priority>
  </url>`;
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getArticles();
  const categories = await getCategories();
  const authors = await getAuthors();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;

  xml += `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${HOST}</loc>
    <lastmod>2020-05-04T14:26:06+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>${HOST}/about</loc>
    <priority>0.80</priority>
  </url>
  ${articles.map(articleEntry).join("\n")}
  ${categories.map(categoryEntry).join("\n")}
  ${authors.map(authorEntry).join("\n")}
</urlset>`;

  await fs.writeFile(sitemapPath, xml, {
    encoding: "utf8"
  });

  return {
    props: {}
  };
};

export default () => {
  return "done";
};
