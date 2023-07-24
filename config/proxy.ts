export default {
  dev: {
    '/api': {
      target: 'http://www.test.com',
      changeOrigin: true,
      pathRewrite: { '^api': '' },
    },
  },
  test: {},
};
