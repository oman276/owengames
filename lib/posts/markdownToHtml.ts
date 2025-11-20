/**
 * @import {} from 'mdast-util-directive'
 * @import {} from 'mdast-util-to-hast'
 * @import {Root} from 'mdast'
 */

import { h } from "hastscript";
import type { Root } from "mdast";
import rehypeStringify from "rehype-stringify";
import remarkDirective from "remark-directive";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import type { Node } from "unist";
import { visit } from "unist-util-visit";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(myRemarkPlugin)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

function myRemarkPlugin() {
  /**
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree: Root) {
    visit(tree, function (node) {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        const data = node.data || (node.data = {});
        const directive = node as Node & {
          name: string;
          attributes: Record<string, string>;
        };

        // center text
        if (directive.name === "center") {
          data.hName = "div";
          const attributes = directive.attributes || {};
          const existingClass = attributes.class || "";
          data.hProperties = h("div", {
            ...attributes,
            class: `text-center ${existingClass}`.trim(),
          }).properties;
        } else {
          // Default behavior for other directives
          const hast = h(directive.name, directive.attributes || {});
          data.hName = hast.tagName;
          data.hProperties = hast.properties;
        }
      }
    });
  };
}
