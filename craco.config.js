
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components/SiteComponents/"),
      "@data": path.resolve(__dirname, "src/Data/Pages/Displayed/"),
      "@page_components": path.resolve(__dirname, "src/Components/PageComponents/"),
      "@pages": path.resolve(__dirname, "src/Pages/Displayed/"),
      "@libraries": path.resolve(__dirname, "src/Components/ExternalLibraries/"),
    }
  }
}