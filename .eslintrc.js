module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 解除限定一行中的字數
    'max-len': 'off',
    // 解除在 function 中可以直接賦予或改變參數的值
    'no-param-reassign': 'off',
    // 讓四則運算 operators 邏輯正常
    'no-mixed-operators': [
      'error',
      { 'allowSamePrecedence': true },
    ],
  },
}
