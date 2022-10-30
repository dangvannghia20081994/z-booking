import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
window.bootstrap = bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
console.log(popoverList)
