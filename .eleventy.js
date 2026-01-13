export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("**/*.xml");
    eleventyConfig.addPassthroughCopy("**/*.js");
}
