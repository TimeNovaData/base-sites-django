import Toastify from 'toastify-js'

export default {
	showToastify: (message, opts) => {
		Toastify({
			duration: 3000,
			position: "center",
			style: { background: "linear-gradient(to right, var(--primary-pure), var(--primary-light))" },
			text: message,
			...opts
		}).showToast();
	},
}