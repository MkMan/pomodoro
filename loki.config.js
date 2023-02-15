/* eslint-env node */

module.exports = {
  // diffingEngine: 'pixelmatch',
  // pixelmatch: {
  //   threshold: 0.2,
  // },
  configurations: {
    'chrome.laptop': {
      target: 'chrome.docker',
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false,
    },
    'chrome.iphone7': {
      target: 'chrome.docker',
      preset: 'iPhone 7',
    },
  },
  fetchFailIgnore: /.*/,
  fileNameFormatter: ({ configurationName, kind, story }) =>
    `${configurationName}/${kind}/${story}`.toLowerCase(),
};
