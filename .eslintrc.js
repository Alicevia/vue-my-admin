module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    'import/prefer-default-export': 0, // 模块不需要默认导出
    'no-param-reassign': 0,
    'vue/no-v-model-argument': 0,
    'no-unused-vars': 1,
    'vue/multi-word-component-names': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],

        extensions: ['.js', '.jsx'],
      },
    },
  },
}
