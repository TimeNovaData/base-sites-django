


const GLOBAL = {
	screen: {
		md: () => window.matchMedia('(max-width: 1024px)').matches,
		sm: () => window.matchMedia('(max-width: 600px)').matches
	},
	context: { /* insert django context here */ },

}

window.GLOBAL = GLOBAL







