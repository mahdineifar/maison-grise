module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          utils: './src/utils',
          components: './src/components',
          constants: './src/constants',
          screens: './src/screens',
        },
      },
    ],
  ],
};
