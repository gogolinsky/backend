/* eslint-disable indent */

const { path, locals, isProduction } = require("./config");
const { dest, build, root } = path;

module.exports = {
  paths: {
    public: isProduction ? build : dest,
    watched: [root]
  },
  files: {
    javascripts: {
      joinTo: "js/app.js"
    },
    stylesheets: {
      joinTo: "css/style.css"
    }
  },
  modules: {
    autoRequire: {
      "js/app.js": [`${root}/js/app.js`]
    }
  },
  plugins: {
    babel: {
      presets: ["latest"]
    },
    sass: {
      options: {
        includePaths: ["node_modules/"]
      }
    },
    copycat: {
      img: [`${root}/img`],
      fonts: [`${root}/fonts`],
      verbose: true,
      onlyChanged: true
    }
  },
  npm: {
    globals: {
      // $: "jquery",
      // jQuery: "jquery"
    }
  },
  watcher: {
    awaitWriteFinish: true
  },
  conventions: {
    assets: [/pages\//, /components\/(\w+|\w+-\w+)\/(\w+|\w+-\w+).pug/],
    ignored: [
      /components\/(\w+|\w+-\w+)\/(\w+|\w+-\w+).(scss|pug)/,
      /templates\/(\w+|\w+-\w+).pug/,
      /layouts\//,
      /\/_/
    ]
  },
  server: { run: true }
};
