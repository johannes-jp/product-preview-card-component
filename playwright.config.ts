import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
	
	use: {
		// baseURL: 'http://localhost:5173/',
		// baseURL: 'https://product-preview-card-component-five-ebon.vercel.app/',
		
		// screenshot: 'on',
	},

	projects: [
		{
			name: 'desktop-chromium',
			use: {
				browserName: 'chromium',
				viewport: { width: 1280, height: 720},
			},
		},
		{
			name: 'desktop-safari',
			use: {
				browserName: 'webkit',
				viewport: { width: 1280, height: 720},
			},
		},
		{
			name: 'desktop-firefox',
			use: {
				browserName: 'firefox',
				viewport: { width: 1280, height: 720},
			},
		},
		{
			name: 'mobile-chrome',
			use: {
				browserName: 'chromium',
				viewport: { width: 374, height: 667},
			},
		},
		{
			name: 'mobile-safari',
			use: {
				browserName: 'webkit',
				viewport: { width: 374, height: 667},
			},
		}
	],
};
export default config;
