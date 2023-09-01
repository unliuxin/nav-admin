import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    'wh-full': 'w-full h-full'
  },
  presets: [presetUno(), presetAttributify()]
})