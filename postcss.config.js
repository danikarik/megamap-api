const tailwindcss = require("tailwindcss")
const cssnano = require("cssnano")

function minify() {
  return [cssnano({ preset: "default" })]
}

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("postcss-import"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
    ...(process.env.RAILS_ENV === "production" ? minify() : []),
  ],
}
