// import { setFormValue } from "/js/helpers.js";
// import { Form } from "/js/form.js";
// import { FileUploader } from './fileuploader.js'

// Form(document.querySelector('[data-form]'))

// FileUploader(document.querySelector('[data-file-label]'))

document.querySelector('[data-form]').action = '/api/setup'
document.querySelector('[data-form]').method = 'POST'

// setFormValue(document.querySelector('[data-form]'), {
//     password: 'Passw0rd!', 
// })