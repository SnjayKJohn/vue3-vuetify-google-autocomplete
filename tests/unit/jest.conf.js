const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vuetify/lib$': 'vuetify/es5/entry-lib',
    '^vuetify/lib/(.*)': 'vuetify/es5/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(vuetify)/)'],
};
