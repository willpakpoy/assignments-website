// const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy("static");
  // eleventyConfig.addPlugin(pluginSass, {sourcemaps: true});
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/static",
  });
  return {
    dir: {
      input: "assignments/work",
      includes: "../../_includes",
      data: "../../_data",
    },
  };
};
