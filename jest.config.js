module.exports = {
  'preset': 'react-native',
  'verbose': true,
  'automock': false,
  'setupFiles': [
    '<rootDir>/setupTest.js'
  ],
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js' // https://github.com/facebook/react-native/issues/19859 https://github.com/facebook/react/issues/13182
  },
  'transformIgnorePatterns': [
    'node_modules/?!(antd|rc-.+)/'
  ],
  'moduleFileExtensions': [
    'js'
  ],
  'moduleDirectories': [
    'node_modules',
    'src'
  ],
  'globals': {
    '__DEV__': false
  },
  'collectCoverageFrom': [
    '**/*.{js,jsx}'
  ],
  'coverageDirectory': '../__coverage__',
  'snapshotSerializers': [
    'enzyme-to-json/serializer'
  ]
}