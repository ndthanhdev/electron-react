module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { electron: require("electron/package.json").version },
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ]
};
