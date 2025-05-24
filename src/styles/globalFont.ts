// // src/styles/globalFont.ts
// import { globalCss } from "@/styles/stitches.config";

// export const applyGlobalFont = globalCss({
//   "@font-face": {
//     fontFamily: "ConconFont",
//     src: "url('/fonts/conconFont.ttf') format('truetype')",
//     fontWeight: "normal",
//     fontStyle: "normal",
//   },
//   "*": {
//     fontFamily: "ConconFont, sans-serif",
//   },
// });

// src/styles/globalFont.ts
import { globalCss } from "@/styles/stitches.config";

export const applyGlobalFont = globalCss({
  "@font-face": [
    {
      fontFamily: "ConconFont",
      src: "url('/my-wedding-invitation/fonts/온글잎 콘콘체.ttf') format('truetype')",
      fontWeight: "normal",
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "LazyRide",
      src: "url('/my-wedding-invitation/fonts/Lazy Ride Personal USe.otf') format('opentype')",
      fontWeight: "normal",
      fontStyle: "normal",
      fontDisplay: "swap",
    }
  ],
  html: {
    fontFamily: "ConconFont, sans-serif !important",
  },
  body: {
    fontFamily: "ConconFont, sans-serif !important",
  },
  "*": {
    fontFamily: "ConconFont, sans-serif !important",
  },
});
