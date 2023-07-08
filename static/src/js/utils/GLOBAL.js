const GLOBAL = {
  context: { /* insert django context here */ },

  toastifyDefault: {
    duration: 3000,
    position: "center",
    style: {
      background: "linear-gradient(to right, var(--primary-pure), var(--primary-light))",
    },
  },

  showToastify: (message) => {
    Toastify({
      ...GLOBAL.toastifyDefault,
      text: message,
    }).showToast();
  },


}

window.GLOBAL = GLOBAL