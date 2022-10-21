module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!vuetify)/lib/'
  ],
};
