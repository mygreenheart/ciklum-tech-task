import createEventModal from "./addEventModal"

const container = document.createElement("div")

container.className = "container"
document.body.appendChild(container)

headerContainer(container)
createEventModal(container)

function headerContainer(container) {
    const headerRow = document.createElement("div")
    const hHeader = document.createElement("h1")
    const fHeader = document.createElement("div")
    const filterSelect = document.createElement("select")
    const newEventBtn = document.createElement("button")

    headerRow.className = "row header"
    hHeader.className = "col"
    hHeader.textContent = "Calendar"
    fHeader.className = "col d-flex justify-content-between"
    filterSelect.className = "member-select"
    newEventBtn.className = "btn btn-primary"
    newEventBtn.type = "button"
    newEventBtn.setAttribute("data-target", "#eventModal")
    newEventBtn.setAttribute("data-toggle", "modal")
    newEventBtn.textContent = "New Event +"

    container.appendChild(headerRow)
    headerRow.appendChild(hHeader)
    headerRow.appendChild(fHeader)
    fHeader.appendChild(filterSelect)
    fHeader.appendChild(newEventBtn)

}

export default function fillSelect(select, arr) {//Fill selects from arrays
    arr.map(element => {
        const option = document.createElement("option")
        option.textContent = element
        select.appendChild(option)
        return option
    })
}