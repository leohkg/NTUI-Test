import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
	rules: {
		indent: ["error", "tab", { SwitchCase: 1 }], // 使用tab缩进
		"vue/html-indent": [
			"error",
			"tab",
			{
				attribute: 1, // 属性缩进一个 tab
				baseIndent: 1, // 基础缩进一个 tab
				closeBracket: 0, // 关闭标签不缩进
				alignAttributesVertically: true, // 垂直对齐属性
				ignores: [], // 忽略的标签
			},
		],	// vue文件html部分缩进
		'vue/html-closing-bracket-newline': [
			'error',
			{
				'singleline': 'never', // 单行元素的关闭标签不换行
				'multiline': 'always'// 多行元素的关闭标签换行
			}
		], // vue文件html部分括号换行
		'vue/html-closing-bracket-spacing': [
			'error',
			{
				'startTag': 'never', // 开始标签不加空格
				'endTag': 'never', // 结束标签不加空格
				'selfClosingTag': 'always' // 自闭合标签加空格
			}
		],	// vue文件html部分括号间距
		'quotes': ['error', 'single'], // 使用单引号
	   	'semi': ['error', 'never'], // 末尾没有分号
		'max-len': ['error', { code: 200 }],	// 单行最大长度
		'eqeqeq': ['error', 'always'],	// 使用全等
		'no-console': 'warn',	// 禁止console
		'curly': ['error', 'all'],	// 强制使用大括号
		'camelcase': ['error', { properties: 'always' }],	// 强制使用驼峰命名法
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },	// 在所有语句和 return 语句之间强制空行
			{ blankLine: 'always', prev: 'block-like', next: '*' },	// 在块级语句和其他语句之间强制空行
			{ blankLine: 'always', prev: '*', next: 'block-like' },	// 在其他语句和块级语句之间强制空行
		], // 强制在特定语句之间使用空行
		'object-curly-spacing': ['error', 'always'], // 对象属性之间需要有一个空格
        'array-bracket-spacing': ['error', 'always'], // 数组元素之间需要有一个空格
		'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗号后面需要有一个空格
        'comma-dangle': ['error', 'always-multiline'], // 最后一个属性或元素后面跟上逗号
		'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 冒号后必须有一个空格
	},
  },

  {
    name: 'app/files-to-ignore',	// 忽略文件
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {
    files: ['src/components/icons/*'], // 指定要忽略的文件路径
    rules: {
      'max-len': 'off', // 忽略单行最大长度规则
    },
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
]
