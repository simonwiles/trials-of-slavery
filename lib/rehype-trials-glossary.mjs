/**
 * Rehype plugin to markup terms from the glossary in rendered markdown.
 *
 * The plugin iterates through rendered `<em>` elements and replaces them with
 *  `<span>`s and an immediately following `<span>` with the gloss content.
 *
 */

import { visit } from "unist-util-visit";
import { glossary } from "./glossary-md-parser.mjs";
import { getMarkdownAsHast } from "./markdown-parsing.mjs";

let glossId = 0;

const markedupNodes = (term, glossNodes) => {
  const id = `glossary-${glossId++}`;
  return [
    {
      type: "element",
      tagName: "span",
      properties: { className: "glossary", ariaDescribedby: id },
      children: [
        {
          type: "text",
          value: term,
          marked: true,
        },
      ],
    },
    {
      type: "element",
      tagName: "span",
      properties: { className: "gloss", role: "tooltip", id },
      children: [
        {
          type: "element",
          tagName: "span",
          properties: { className: "header" },
          children: [
            {
              type: "text",
              value: term,
              marked: true,
            },
          ],
        },
        ...glossNodes,
      ],
    },
  ];
};

const RehypeTrialsGlossary = (options) => {
  return (tree) => {
    visit(tree, "text", (node, index, parent) => {
      if (parent.type == "element" && parent.tagName == "em" && !node.marked) {
        Object.entries(glossary).forEach(([terms, gloss]) => {
          terms.split(",").forEach((term) => {
            if (node.value === term) {
              const glossContent = getMarkdownAsHast(
                gloss,
                /* markNodes= */ true,
              );
              parent.children = markedupNodes(node.value, glossContent);
            }
          });
        });
      }
    });
  };
};

export default RehypeTrialsGlossary;
