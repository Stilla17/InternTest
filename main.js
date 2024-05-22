let content_data = document.querySelector('.content_data')

let workiz = document.querySelector('.workiz')

let wonBtn = document.querySelector('#btn-won')

let createBtn = document.querySelector('.create')
let saveBtn = document.querySelector('.save')

wonBtn.addEventListener('click', (e) => {
    e.preventDefault()
    content_data.classList.add('active')
})

createBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const fields = ['first', 'last', 'phone', 'email', 'jobType', 'jobSource', 'jobDescription', 'address', 'city', 'state', 'zipcode', 'area', 'date', 'time1', 'time2', 'test']

    fields.map(item => {
        document.getElementById(`${item}Span`).textContent = document.getElementById(item).value;
    })
})