// app/preflight.mjs
export default async function Preflight({ req }) {
  const { path } = req;

  const customStylesMap = {
    // '/': '<link rel="stylesheet" href="/_public/styles/home.css">',
  };

  return {
    pageTitle: getPageTitle(path),
    pageTitleLower: getPageTitle(path, true),
    pageStyles: customStylesMap[path] || "",
  };
}

function getPageTitle(path, lowercase) {
  const titleMap = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
  };

  const title = titleMap[path] || "My Site";
  return lowercase ? title.toLowerCase() : title;
}