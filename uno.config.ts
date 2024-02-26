import {defineConfig, presetTypography, presetUno, presetWebFonts} from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        "sans": "IBM Plex Sans"
      }
    })
  ],
})