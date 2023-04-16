module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          // This need to be mirrored in jsconfig.json
          "@api": './src/api',
          "@assets": './src/assets',
          "@components": './src/components',
          "@connectors": './src/connectors',
          "@constants": './src/constants',
          "@formatters": './src/formatters',
          "@navigator": './src/navigator',
          "@pages": './src/pages',
          "@shared": './src/shared',
          "@store": './src/store',
          "@styles": './src/styles',
          "@utils": './src/utils',
        },
      },
    ],
  ],
};
