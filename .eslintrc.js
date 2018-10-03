module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "react/forbid-prop-types": [0],
    "no-unused-vars": [0],
   },
   "env": {
      "browser": true,
      "node": true,
      "jest": true
    },
    "globals": {
      "React": true
    },
    "ecmaFeatures": {
      "jsx": true
    },
    "plugins": [
      "react"
    ]
};
