module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true
  },
  "globals": {
    "shallow": true,
    "render": true,
    "mount": true
  },
  "rules": {
    "object-curly-spacing": ["warn", "never"],
    "func-names": "off",
    "space-before-function-paren": ["error", "never"],
    "max-len": ["error", 120, 4],
    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
    "import/prefer-default-export": "off",
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "functions": "ignore"
    }],
    "import/no-extraneous-dependencies": [
    "error", {
       "devDependencies": true, 
       "optionalDependencies": false, 
       "peerDependencies": false, 
       "packageDir": "./"
    }],
    "no-unused-expressions": 0,
    "react/jsx-filename-extension": "off",
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight", "to" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "no-confusing-arrow": "off",
    "jsx-a11y/anchor-has-content": ["error"],
    "jsx-a11y/no-redundant-roles": ["error", {
      nav: ['navigation'],
    }],
  }
};