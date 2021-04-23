const currentYear = document.getElementById('year')
const updatedDate = document.getElementById('lastDate')

function getCurrentYear() {
    const date = new Date()
    const year = date.getFullYear()
    currentYear.innerHTML = year
}

function getLastModified() {
    const lastModified = new Date(document.lastModified).toLocaleString()
    updatedDate.innerHTML = lastModified
}

getCurrentYear()
getLastModified()