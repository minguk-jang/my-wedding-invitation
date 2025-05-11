// styles/stitches.config.ts
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme } = createStitches({
  theme: {
    fonts: {
      body: 'sans-serif',
    },
  },
});
