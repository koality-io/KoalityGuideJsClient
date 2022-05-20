module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      importHelpers: true
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  roots: ['<rootDir>'],
  testMatch: [
    '**/tests/**/*.test.ts',
  ],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest'
  }
}
