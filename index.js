// var md            = require('markdown-it');
var terminal      = require('./lib/markdown-it-terminal');
var merge         = require('lodash.merge');
var styles        = require('ansi-styles');

module.exports = function terminal_plugin(md,options) {
  var defaultOptions = {
    styleOptions: {
      code: styles.reset,
      blockquote: styles.bold,
      html: styles.gray,
      heading: terminal.compoundStyle(['green','bold']),
      firstHeading: terminal.compoundStyle(['magenta','underline','bold']),
      hr: styles.reset,
      listitem: styles.yellow,
      table: styles.reset,
      paragraph: styles.reset,
      strong: styles.bold,
      em: styles.italic,
      codespan: styles.reset,
      del: terminal.compoundStyle(['dim','gray','strikethrough']),
      link: styles.blue,
      href: terminal.compoundStyle(['blue','underline'])
    },
    unescape: true
  };

  var opts = merge({}, defaultOptions, options);
  terminal(md,opts);
  // console.log(styles)
};
