import { theme } from "../cms.ts";

export default {
  type: "object",
  name: "logos",
  fields: [
    "title: text",
    "id: text",
    theme,
    "description: markdown",
    {
      type: "select",
      name: "size",
      options: ["small", "medium"],
    },
    {
      type: "object-list",
      name: "items",
      label: "Logos",
      fields: [
        "alt: text",
        {
          type: "file",
          name: "img",
          label: "Image",
          upload: "uploads:logos",
        },
        "url: url",
        "description: text",
      ],
    },
  ],
};
