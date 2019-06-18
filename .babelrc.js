module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "last 1 Chrome versions"
        // targets: { electron: require("electron/package.json").version },
        // useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ]
};
