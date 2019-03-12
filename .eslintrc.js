/*
 * @Description: 
 * @Author: jiahe.xu
 * @LastEditors: jiahe.xu
 * @Date: 2018-12-06 11:37:32
 * @LastEditTime: 2019-02-28 15:35:27
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017
  },
  env: {
    browser: true
  },
  globals: {
    videojs: true
  },
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': 'off', //结尾使用额外的逗号
    'quote-props': 'off', //只对非法标识符的属性使用引号
    'no-trailing-spaces': 'off', //禁止行尾空格
    'vue/html-self-closing': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
    'import/no-dynamic-require': 'off',
    'linebreak-style': 'off', //强制统一的换行符
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'global-require': 'off', //全局的require
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 'off',
    'no-console': 'off', //暂时先关掉，因为prod也有可能需要输入
    'no-param-reassign': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-mixed-operators': 'off',
    'prefer-template': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'prefer-destructuring': ['error', { object: false, array: false }],
    'operator-linebreak': [2, 'after'], //运算负载行尾
    'spaced-comment': 'off', //注释风格要不要有空格什么的
    'import/newline-after-import': 'off', //不用一定要在import文件后空一行
    'arrow-body-style': 'off', //箭头函数不一定要采用括号的形式
    'no-unused-expressions': 'off', //允许包含eslint觉得不符合的逻辑语句
    'no-shadow': 'off', //允许在函数内部定义全局相同的变量名
    'consistent-return': 'off', //允许返回不同的值
    'no-restricted-syntax': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ], //每一行attributes的个数限制
    'vue/attribute-hyphenation': 'off', //template内attribute的风格'user-info' 还是'userInfo'
    'func-names': 'off',
    'vue/attributes-order': 'off' //vue组件template属性的顺序
  }
};
