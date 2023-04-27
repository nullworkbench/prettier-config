module.exports = {
  printWidth: 100,
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx", "*.vue"],
      options: {
        trailingComma: "all",
        singleQuote: true,
      },
    },
  ],
};
