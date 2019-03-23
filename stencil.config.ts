import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/normalize/reset.scss',
        'src/global/normalize/normalize.scss',
        'src/global/abstract/variables.scss',
        'src/global/abstract/mixins.scss'
      ]
    })
  ]
};
