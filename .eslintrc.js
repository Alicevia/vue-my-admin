module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/no-multiple-template-root': 1,
    'no-unused-vars': 1,
    'linebreak-style': 0,
    semi: 0,
    'vue/multi-word-component-names': 0,
    'object-curly-newline': 0,
    'vue/no-v-model-argument': 0,
    'import/no-extraneous-dependencies': 0,
  },
}
