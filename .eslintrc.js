module.exports = {
  extends: ['taro/react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'no-shadow': { hoist: 'never' },
  },
};
