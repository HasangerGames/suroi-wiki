import { defineConfig, presetTypography, presetUno, presetWind } from 'unocss';

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			background: 'hsl(0 0% 12.5%)',
			foreground: 'hsl(60 9.1% 97.8%)',
			card: 'hsl(20 14.3% 4.1%)',
			'card-foreground': 'hsl(60 9.1% 97.8%)',
			popover: 'hsl(20 14.3% 4.1%)',
			'popover-foreground': 'hsl(60 9.1% 97.8%)',
			primary: 'hsl(209, 60%, 51%)',
			'primary-foreground': 'hsl(60 9.1% 97.8%)',
			secondary: 'hsl(12 6.5% 15.1%)',
			'secondary-foreground': 'hsl(60 9.1% 97.8%)',
			muted: 'hsl(12 6.5% 15.1%)',
			'muted-foreground': 'hsl(24 5.4% 63.9%)',
			accent: 'hsl(12 6.5% 15.1%)',
			'accent-foreground': 'hsl(60 9.1% 97.8%)',
			destructive: 'hsl(0 72.2% 50.6%)',
			'destructive-foreground': 'hsl(60 9.1% 97.8%)',
			border: 'hsl(0 0% 50%)',
			input: 'hsl(12 6.5% 15.1%)',
			ring: 'hsl(209, 97%, 51%)'
		}
	},
	presets: [presetUno(), presetTypography(), presetWind()],
	transformers: []
});
