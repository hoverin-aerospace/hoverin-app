module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@screens': './src/components/screens',
          '@queries': './src/apollo/queries',
          '@reactiveVariables': './src/apollo/reactiveVariables',
          '@icons': './src/assets/icons',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@themes': './src/themes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
