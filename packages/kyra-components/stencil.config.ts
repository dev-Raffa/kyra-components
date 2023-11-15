import { Config } from '@stencil/core';
import {reactOutputTarget} from '@stencil/react-output-target'
export const config: Config = {
  namespace: 'kyra-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'kyra-components',
      proxiesFile: '../kyra-components-react/lib/components/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
