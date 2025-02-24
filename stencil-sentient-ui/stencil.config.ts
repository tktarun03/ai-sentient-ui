import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-sentient-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
