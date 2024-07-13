module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text"],
};
