const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    eleventyConfig.addPassthroughCopy("_src/css");
    eleventyConfig.addPassthroughCopy("_src/images");
    // Return your Object options:
    return {
      dir: {
        input: "_src",
        output: "_publish"
      }
    }
  };