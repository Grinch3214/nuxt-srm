// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
	modules: [
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		['@nuxtjs/color-mode', {
			preference: 'dark',
			classSuffix: '',
		}],
		['@nuxtjs/google-fonts', {
			families: {
				Lato: {
					wght: [300, 400, 700],
					ital: [300],
				}
			}
		}],
	],
	shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})