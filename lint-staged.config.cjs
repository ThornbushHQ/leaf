module.exports = {
  '*.{ts,tsx,css}': ['yarn prettier:format'],
  '*.{ts,tsx}': ['yarn eslint:format', 'yarn tsc', 'yarn test'],
};
