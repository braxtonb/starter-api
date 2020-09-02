module.exports = {
  "testEnvironment": "node",
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  },
  "collectCoverage": true,
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ]
};