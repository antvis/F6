module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  testMatch: [
    "**/tests/unit/**/*.ts", // Ensure this matches the path to your test files
  ],
  // Other configurations...
};
