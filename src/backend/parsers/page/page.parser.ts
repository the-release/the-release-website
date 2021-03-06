import path from "path";

import { ORIGIN } from "../../../config";
import { parseMarkDown } from "../../utils/markdown";
import { exportImages } from "../../utils/image-export";
import { addImageCaptions } from "../../utils/image-caption";
import { lazyLoadImages } from "../../utils/image-lazy-load";
import { makeImageResponsive } from "../../utils/image-responsive";
import { titleSelector } from "./page.selector";
import { glob } from "../../utils/glob";
import { isDraft } from "../../utils/draft";
import { stripBody } from "../../utils/strip-body";

const pagesDir = path.join(process.cwd(), "data", "pages");

const parsePage = async (filePath: string) => {
  const { dir: slug } = path.parse(filePath);
  const fullPath = path.join(pagesDir, filePath);
  const basePath = path.join(pagesDir, slug);

  try {
    let htmlContent = await parseMarkDown(fullPath);
    const { html } = await exportImages(htmlContent, basePath);

    htmlContent = addImageCaptions(html);
    htmlContent = lazyLoadImages(htmlContent);
    htmlContent = makeImageResponsive(htmlContent);
    htmlContent = stripBody(htmlContent);

    return {
      url: `/${slug}`,
      absoluteUrl: `${ORIGIN}/${slug}`,
      slug,
      htmlContent,
      title: titleSelector(htmlContent),
      isDraft: isDraft(slug)
    };
  } catch (err) {
    console.error(
      "Error:",
      err?.message || "An unexpected error occurred while parsing the page"
    );
    console.error(`Page: ${slug}`);
    process.exit(1);
  }
};

export const parsePages = async () => {
  const files = await glob(`**/page.md`, {
    cwd: pagesDir,
    dot: true
  });

  return await Promise.all(
    files.map(async filePath => await parsePage(filePath))
  );
};
