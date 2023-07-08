export default function salebrandContato(){
    const contatoFormSubmit = document.querySelector('#form-submit')
  contatoFormSubmit && contatoFormSubmit.addEventListener('submit', function(event) {
      event.preventDefault();
      disabledBtn()
      const form_data = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        telefone: document.querySelector('#telefone').value,
        mensagem: document.querySelector('#mensagem').value,
      }
      const url = "/fale-conosco/"
      axios.post(url, form_data)
        .then((response) => showMessage(response))
        .catch((response) => showMessage(response));
    });

    function showMessage(response) {
      const message = response.data ? response.data.message : response.message
      GLOBAL.showToastify(message)
      contatoFormSubmit.reset()
      setTimeout(enabledBtn, 1000)
    }

    const btnSubmit = document.querySelector(".btn")

    function disabledBtn() {
      btnSubmit.disabled = true
      btnSubmit.classList.add("disabled")
    }

    function enabledBtn() {
      btnSubmit.disabled = false
      btnSubmit.classList.remove("disabled")
    }
}