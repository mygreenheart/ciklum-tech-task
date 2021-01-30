export default function createDeleteModal(container) {
    const modal = document.createElement("div")
    const modalDialog = document.createElement("div")
    const modalBody = document.createElement("div")
    const modalContent = document.createElement("div")
    const deleteText = document.createElement("p")

    modal.className = "modal fade"
    modal.id = "deleteModal"
    modalDialog.className = "modal-dialog modal-dialog-centered"
    modalDialog.setAttribute("role", "document")
    modalContent.className = "modal-content"
    modalBody.className = "modal-body"
    deleteText.id = "deleteText"

    container.appendChild(modal)
    modal.appendChild(modalDialog)
    modalDialog.appendChild(modalContent)
    eventModalHeader(modalContent)
    modalContent.appendChild(modalBody)
    modalBody.appendChild(deleteText)
    eventModalFooter(modalContent)
}

function eventModalHeader(modalContent) {
    const modalHeader = document.createElement("div")
    const headerTitle = document.createElement("h5")
    const headerButton = document.createElement("button")
    const headerSpan = document.createElement("span")

    modalHeader.className = "modal-header"
    headerTitle.textContent = "Delete event"
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

function eventModalFooter(modalContent) {
    const modalFooter = document.createElement("div")
    const buttonClose = document.createElement("button")
    const buttonCreate = document.createElement("button")

    modalFooter.className = "modal-footer"
    buttonClose.type = "button"
    buttonClose.className = "btn btn-secondary"
    buttonClose.setAttribute("data-dismiss", "modal")
    buttonClose.textContent = "No"
    buttonCreate.type = "submit"
    buttonCreate.className = "btn btn-primary"
    buttonCreate.id = "deleteBtn"
    buttonCreate.setAttribute("data-dismiss", "modal")
    buttonCreate.textContent = "Yes"

    modalContent.appendChild(modalFooter)
    modalFooter.appendChild(buttonClose)
    modalFooter.appendChild(buttonCreate)
}