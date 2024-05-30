export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'annotation-no-unknown': [
      true,
      {
        ignoreAnnotations: ['!=='],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['should-forward-prop'],
      },
    ],
    'no-missing-end-of-source-newline': null,
  },
};
