export default function showFormErrors() {
    const allFormsErrors = document.querySelectorAll("[id^='form-errors']")
    allFormsErrors.forEach(formErrors => showErrors(formErrors))

    function showErrors(formErrors) {
        const errorsText = formErrors.textContent
        const errors = JSON.parse(errorsText).__all__
        errors && errors.forEach(error => error ? GLOBAL.showToastify(error) : "")
    }
}
