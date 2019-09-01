module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  rules: {
    'declaration-colon-newline-after': null,
    'at-rule-no-unknown': null,
    'color-hex-case': null,
    'block-closing-brace-newline-after': null,
    'at-rule-empty-line-before': null,
    'number-no-trailing-zeros': null,
    'no-empty-source': null,
    'unit-case': null,
    'scss/at-rule-no-unknown': true,
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-colon-notation': null,
    'selector-type-no-unknown': null,
    'unit-case': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'],
      },
    ],
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-colon-notation': null,
    'selector-type-no-unknown': null,
    'unit-case': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'],
      },
    ],
  },
};
