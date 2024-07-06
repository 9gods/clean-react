module.exports = {
  roots: ['<rootDir>/src'],
  collectCoveragefrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnviroment: 'node',
  tranform: {
    '.+\\.ts$': 'ts-jest'
  }
}