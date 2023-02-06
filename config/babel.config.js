module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
    ],
    // '@babel/preset-typescript',
  ];

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        'corejs': { 'version': 3, 'proposals': true },
        'useESModules': true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};