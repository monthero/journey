import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base', 
    createPreset({
      accentColor: 'violet',
      grayColor: 'mauve',
      borderRadius: 'md',
      additionalColors: ['purple', 'plum'],
    }),
  ],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'solid',
  outdir: 'styled-system',
});
