const hours = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const members = ["Alina", "Mark", "Sumail", "Kate"]

import fillSelect from "./main"

export default function createEventModal(container) {
    const modal = document.createElement("div")
    const modalDialog = document.createElement("div")
    const modalBody = document.createElement("div")
    const modalContent = document.createElement("div")

    modal.className = "modal fade"
    modal.id = "eventModal"
    modalDialog.className = "modal-dialog modal-dialog-centered"
    modalDialog.setAttribute("role", "document")
    modalContent.className = "modal-content"
    modalBody.className = "modal-body"

    container.appendChild(modal)
    modal.appendChild(modalDialog)
    modalDialog.appendChild(modalContent)
    eventModalHeader(modalContent)
    modalContent.appendChild(modalBody)
    eventModalBody(modalBody)
    eventModalFooter(modalContent)
}

function eventModalHeader(modalContent) {
    const modalHeader = document.createElement("div")
    const headerTitle = document.createElement("h5")
    const headerButton = document.createElement("button")
    const headerSpan = document.createElement("span")

    modalHeader.className = "modal-header"
    headerTitle.textContent = "Create event"
    headerButton.type = "button"
    headerButton.className = "close"
    headerButton.setAttribute("data-dismiss", "modal")
    headerButton.setAttribute("aria-label", "Close")
    headerSpan.setAttribute("aria-hidden", true)
    headerSpan.textContent = "X"

    modalContent.appendChild(modalHeader)
    modalHeader.appendChild(headerTitle)
    modalHeader.appendChild(headerButton)
    headerButton.appendChild(headerSpan)
}

function eventModalBody(modalBody) {

    inputModal(modalBody, "Name of the event:", "input")
    inputModal(modalBody, "Participants:", "select", members, true)
    inputModal(modalBody, "Day:", "select", days)
    inputModal(modalBody, "Time:", "select", hours)

}

function eventModalFooter(modalContent) {
    const modalFooter = document.createElement("div")
    const buttonClose = document.createElement("button")
    const buttonCreate = document.createElement("button")

    modalFooter.className = "modal-footer"
    buttonClose.type = "button"
    buttonClose.className = "btn btn-secondary"
    buttonClose.setAttribute("data-dismiss", "modal")
    buttonClose.textContent = "Close"
    buttonCreate.type = "submit"
    buttonCreate.className = "btn btn-primary"
    buttonCreate.setAttribute("data-dismiss", "modal")
    buttonCreate.textContent = "Create"

    modalContent.appendChild(modalFooter)
    modalFooter.appendChild(buttonClose)
    modalFooter.appendChild(buttonCreate)
}

function inputModal(modalBody, name, typeInput, arr, isMultiple) {
    const modalInputGroup = document.createElement("div")
    const modalSpan = document.createElement("span")
    const modalInput = document.createElement(typeInput)

    modalInputGroup.className = "input-group"
    modalSpan.textContent = name
    modalSpan.className = "input-group-text"
    if (typeInput === "input") {
        modalInput.className = "form-control"
        modalInput.type = "text"
    }
    if (typeInput === "select") {
        modalInput.className = "form-select"
        isMultiple ? modalInput.setAttribute("multiple", true) : ""

        fillSelect(modalInput, arr)
    }

    modalBody.appendChild(modalInputGroup)
    modalInputGroup.appendChild(modalSpan)
    modalInputGroup.appendChild(modalInput)
}

// createEvent.addEventListener("click", () => {//Event add new event to calendar
//     const membersData = [...selectParticipants.options].filter(option => option.selected).map(option => option.value)
//     selectFillter.value = "All members"

//     if ((membersData.length === 0) || (eventName.value.length === 0)) {
//         alert("Failed to create event. Select participants and enter event name.")
//     } else if (events.has(selectDay.value + selectTime.value)) {
//         alert("Failed to create event. Time slot is already booked.")
//     } else {
//         events.set(selectDay.value + selectTime.value,
//             {
//                 members: membersData,
//                 eventName: eventName.value
//             })
//         fillCalendar(events)
//     }

// })
