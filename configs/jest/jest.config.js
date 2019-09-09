module.exports = {
  rootDir: `./../../`,
  roots: [`<rootDir>/src`],
  moduleDirectories: [`src`, `node_modules`],
  transform: {
    "^.+\\.(ts|tsx)$": `ts-jest`,
    "^.+\\.(js|jsx|mjs)$": `<rootDir>/configs/jest/jest-preprocess.js`
  },
  testRegex: `(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$`,
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/configs/jest/__mocks__/file-mock.js`
  },
  moduleFileExtensions: [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `.git`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  setupFiles: [
    `<rootDir>/configs/jest/loadershim.js`,
    `<rootDir>/configs/jest/setupTests.js`
  ]
};
