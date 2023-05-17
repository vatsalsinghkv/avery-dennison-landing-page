import { resolve } from 'path';

const config = {
  resolve: {
    alias: {
      $images: resolve('./public/images'),
    },
  },
};

export default config;
