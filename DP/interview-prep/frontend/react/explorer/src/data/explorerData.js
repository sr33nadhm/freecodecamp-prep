const explorerData = {
  name: "root",
  dir: true,
  items: [
    {
      name: "src",
      dir: true,
      items: [
        {
          name: "data",
          dir: true,
          items: [
            {
              name: "data.js",
              dir: false,
            },
          ],
        },
        {
          name: "components",
          dir: true,
          items: [
            {
              name: "Folder.js",
              dir: false,
            },
          ],
        },
        {
          name: "App.js",
          dir: false,
        },
      ],
    },
    {
      name: "public",
      dir: true,
      items: [
        {
          name: "index.html",
          dir: false,
        },
        {
          name: "robots.txt",
          dir: false,
        },
        {
          name: "favicon.ico",
          dir: false,
        },
      ],
    },
    {
      name: "package.json",
      dir: false,
    },
  ],
};

export default explorerData;
