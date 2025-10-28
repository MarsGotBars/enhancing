import { getStyles } from "@enhance/arc-plugin-styles";

export default function Head(state) {
  const { store = {} } = state;

  const { pageTitle = "undefined", pageTitleLower = "home" } = store;

  const styles = process.env.ARC_LOCAL
    ? getStyles.linkTag()
    : getStyles.styleTag();

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${pageTitle} | The Present</title>
      <link rel="stylesheet" href="/_public/styles/general.css">
      <link rel="stylesheet" href="/_public/styles/motion/${pageTitleLower}--motion.css">
      <link rel="stylesheet" href="/_public/styles/${pageTitleLower}.css">
      ${styles}
      <link rel="icon" href="/_public/favicon.svg">
      <meta name="description" content="The present is now">
    </head>
`;
}
