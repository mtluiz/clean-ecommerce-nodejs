export default {
  collectCoverage: true,
  preset: "@shelf/jest-mongodb",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    ".+\\.ts$": "ts-jest"
  },
};
