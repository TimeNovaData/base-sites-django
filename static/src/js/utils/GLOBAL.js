
const GLOBAL = {
	screen: {
		md: () => window.matchMedia('(max-width: 1180px)').matches
	},
	context: { /* insert django context here */ },

}

window.GLOBAL = GLOBAL



