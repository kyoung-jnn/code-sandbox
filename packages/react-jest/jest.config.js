module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "@src/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
};
