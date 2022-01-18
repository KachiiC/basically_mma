const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components/SiteComponents/"),
      "@data": path.resolve(__dirname, "src/Data/Main/Displayed/"),
      "@filter": path.resolve(__dirname, "src/Components/FilterComponents/"),
      "@libraries": path.resolve(__dirname, "src/Components/ExternalLibraries/"),
      "@pages": path.resolve(__dirname, "src/Pages/Displayed/"),
    }
  }
}