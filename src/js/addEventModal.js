import fillSelect from "./main"

export default function createEventModal(container, members, days, hours) {
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
    eventModalBody(modalBody, members, days, hours)
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

function eventModalBody(modalBody, members, days, hours) {

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
    buttonCreate.className = "btn btn-primary create-event"
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
        modalInput.className = "form-control modal-inputs"
    }
    if (typeInput === "select") {
        modalInput.className = "form-select modal-inputs"
        isMultiple ? modalInput.setAttribute("multiple", true) : ""
        fillSelect(modalInput, arr)
    }

    modalBody.appendChild(modalInputGroup)
    modalInputGroup.appendChild(modalSpan)
    modalInputGroup.appendChild(modalInput)
}


