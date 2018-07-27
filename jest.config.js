module.exports = {
  coverageDirectory: '../coverage',
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  rootDir: './src',
  testRegex: '.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
