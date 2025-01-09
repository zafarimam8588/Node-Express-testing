module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/**/*.ts", // Specify files for coverage collection
    "!src/**/*.d.ts", // Exclude type declaration files
  ],
  coverageDirectory: "coverage", // Directory for coverage reports
  coverageReporters: ["text", "lcov"], // Types of coverage reports
};
