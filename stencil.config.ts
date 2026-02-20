import image from '@rollup/plugin-image';
import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'pango-toolbar',
  plugins: [
    sass(),
    image(),
  ],
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ]
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{
        src: 'assets',
        dest: 'dist/assets'
      }]
    },
    {
      type: 'dist-custom-elements',
      copy: [{
        src: 'assets',
        dest: 'dist/assets'
      }]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: '**/*.html' },
        { src: '*.css' },
        { src: 'assets/**/*', dest: 'assets/' }
      ]
    },
  ],
  testing: {
    moduleNameMapper: {
      '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/src/utils/__mocks__/imageMock.ts',
    },
  },
  extras: {
    enableImportInjection: true
  }
};