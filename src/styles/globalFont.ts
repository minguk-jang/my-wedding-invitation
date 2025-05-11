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
  "@font-face": {
    fontFamily: "ConconFont",
    src: "url('/fonts/온글잎 콘콘체.ttf') format('truetype')",
    fontWeight: "normal",
    fontStyle: "normal",
  },
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
