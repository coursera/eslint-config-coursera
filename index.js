module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    mocha: true,
    amd: true,
    jest: true
  },
  plugins: ['react', 'jsx-a11y', 'flowtype', 'coursera', 'prettier'],
  globals: {
    environment: true
  },
  ecmaFeatures: {
    globalReturn: false,
    objectLiteralComputedProperties: false,
    regexUFlag: true,
    regexYFlag: true,
    restParams: true,
    unicodeCodePointEscapes: false,
    experimentalObjectRestSpread: true,
    jsx: true
  },
  rules: {
    'accessor-pairs': 2,
    'arrow-body-style': [0, 'as-needed'],
    // TODO: Consider if we want to enable this rule.
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      0,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore'
      }
    ],
    complexity: 0,
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 1,
    'coursera/no-translated-template-strings': 1,
    curly: [1, 'multi-line'],
    'default-case': 1,
    'dot-notation': [
      1,
      {
        allowKeywords: true
      }
    ],
    'dot-location': [2, 'property'],
    eqeqeq: 1,
    'flowtype/define-flow-type': 1,
    'func-names': 0,
    'global-require': 0,
    'guard-for-in': 1,
    'id-length': 0,
    // TODO: Consider enabling these import rules
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-a11y/aria-props': 1,
    'jsx-a11y/aria-proptypes': 1,
    'jsx-a11y/aria-role': 1,
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/role-has-required-aria-props': 1,
    'jsx-a11y/role-supports-aria-props': 1,
    'jsx-a11y/tabindex-no-positive': 1,
    'linebreak-style': 2,
    'max-len': [
      2,
      {
        code: 120,
        tabWidth: 2,
        ignoreStrings: true
      }
    ],
    'new-cap': [
      1,
      {
        capIsNewExceptions: ['Q', 'API', 'ZeroClipboard']
      }
    ],
    'newline-per-chained-call': 0,
    'no-bitwise': 2,
    'no-continue': 2,
    'no-div-regex': 2,
    'no-else-return': 0,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lonely-if': 2,
    'no-multi-spaces': 2,
    'no-nested-ternary': 1,
    'no-new': 2,
    'no-param-reassign': 1,
    'no-plusplus': 2,
    'no-process-env': 2,
    'no-shadow': 1,
    'no-unused-expressions': 2,
    'no-undef': 1,
    'no-undef-init': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-unused-vars': [
      1,
      {
        args: 'none'
      }
    ],
    'no-void': 2,
    'no-var': 2,
    'no-warning-comments': [
      1,
      {
        terms: ['fixme', 'hack', 'xxx'],
        location: 'start'
      }
    ],
    'padded-blocks': 0,
    'prefer-arrow-callback': 0,
    'prefer-const': 2,
    'prefer-default-export': 0,
    'prefer-template': 0,
    strict: 0,
    'object-curly-spacing': 0,
    'operator-linebreak': [1, 'after'],
    quotes: [1, 'single', 'avoid-escape'],
    'quote-props': [1, 'consistent'],
    'react/jsx-boolean-value': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: true
      }
    ],
    'react/jsx-quotes': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-multi-comp': 0,
    'react/no-unused-prop-types': [
      1,
      {
        customValidators: [],
        skipShapeProps: true
      }
    ],
    'react/prefer-es6-class': 1,
    'react/prefer-stateless-function': 0,
    'react/require-extension': 0,
    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ],
        groups: {
          'static-methods': ['propTypes', 'contextTypes', 'childContextTypes'],
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'getDefaultProps',
            'getStateFromStores',
            'state',
            'getInitialState',
            'getChildContext',
            'constructor',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
            '/^handle.+$/',
            '/^on.+$/',
            '/^get.+$/',
            'everything-else',
            '/^render.+$/',
            'render'
          ]
        }
      }
    ],
    'sort-vars': 1,
    'space-before-function-paren': [2, 'never'],
    'vars-on-top': 0
  }
};
