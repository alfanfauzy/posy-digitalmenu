/* eslint-disable @typescript-eslint/no-var-requires */
const preset = require('posy-fnb-core/dist/preset.cjs');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	presets: [preset],
};
