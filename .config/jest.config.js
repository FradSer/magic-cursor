/**
 * @param config {import('@arco-design/arco-scripts').JestConfig}
 */
exports.node = (config) => {
  config.moduleNameMapper = {
    '^magic-cursor/(.+)$': '<rootDir>/$1',
    '^magic-cursor$': '<rootDir>',
  };
};

/**
 * @param config {import('@arco-design/arco-scripts').JestConfig}
 */
exports.client = (config) => {
  config.moduleNameMapper = {
    '^magic-cursor/(.+)$': '<rootDir>/$1',
    '^magic-cursor$': '<rootDir>',
  };
};
