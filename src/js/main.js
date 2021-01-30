import createCalendar from "./calendar"
import createEventModal from "./addEventModal"
import createDeleteModal from "./deleteModal"

const hours = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const members = ["Alina", "Mark", "Sumail", "Kate"]

const container = document.createElement("div")
container.className = "container"
document.body.appendChild(container)

headerContainer(container)
createEventModal(container, members, days, hours)
createDeleteModal(container)
createCalendar(container, hours, days)


const modalInputs = document.querySelectorAll(".modal-inputs")
const createEvent = document.querySelector(".create-event")
const selectFillter = document.querySelector(".filter-select")
const calendarData = document.getElementsByClassName("calendar-time")
fillSelect(selectFillter, members)
const events = new Map()

function headerContainer(container) {
    const headerRow = document.createElement("div")
    const hHeader = document.createElement("h1")
    const fHeader = document.createElement("div")
    const filterSelect = document.createElement("select")
    const newEventBtn = document.createElement("button")
    const optionFilter = document.createElement("option")

    headerRow.className = "row header"
    hHeader.className = "col"
    hHeader.textContent = "Calendar"
    fHeader.className = "col d-flex justify-content-between"
    filterSelect.className = "filter-select"
    optionFilter.textContent = "All members"
    optionFilter.selected = true
    newEventBtn.className = "btn btn-primary"
    newEventBtn.type = "button"
    newEventBtn.setAttribute("data-target", "#eventModal")
    newEventBtn.setAttribute("data-toggle", "modal")
    newEventBtn.textContent = "New Event +"

    container.appendChild(headerRow)
    headerRow.appendChild(hHeader)
    headerRow.appendChild(fHeader)
    fHeader.appendChild(filterSelect)
    filterSelect.appendChild(optionFilter)
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

createEvent.addEventListener("click", () => {//Event add new event to calendar
    const eventName = modalInputs[0]
    const selectParticipants = modalInputs[1]
    const selectDay = modalInputs[2]
    const selectTime = modalInputs[3]

    const membersData = [...selectParticipants.options].filter(option => option.selected).map(option => option.value)
    // selectFillter.value = "All members"

    if ((membersData.length === 0) || (eventName.value.length === 0)) {
        alert("Failed to create event. Select participants and enter event name.")
    } else if (events.has(selectDay.value + selectTime.value)) {
        alert("Failed to create event. Time slot is already booked.")
    } else {
        events.set(selectDay.value + selectTime.value,
            {
                members: membersData,
                eventName: eventName.value
            })
        fillCalendar(events)
    }

})

function clearCalendar() {
    for (const td of calendarData) {//Clear calendar
        td.textContent = ''
        td.classList.remove("event")
    }
}

function fillCalendar(eventMap) {//Fill calendar events from events Map
    clearCalendar()
    for (const [eventKey, eventData] of eventMap) {//Add event component to table
        for (const td of calendarData) {
            if (td.title === eventKey) {
                eventComponent(td, eventKey, eventData.eventName)
            }
        }
    }

}

function eventComponent(td, eventKey, eventName) {//Create event component 
    const div = document.createElement("div")
    const spanClose = document.createElement("span")
    const eventText = document.createElement("p")

    td.classList.add("event")
    td.draggable = true

    spanClose.textContent = "×"
    spanClose.style.cursor = "pointer"
    spanClose.setAttribute("data-target", "#deleteModal")
    spanClose.setAttribute("data-toggle", "modal")

    spanClose.addEventListener("click", () => {
        deleteModal(td, eventKey, eventName)
    })

    eventText.textContent = eventName
    td.appendChild(div)
    div.appendChild(eventText)
    div.appendChild(spanClose)

}

function deleteModal(td, eventKey, eventName) {//Delete modal event
    const deleteModalText = document.querySelector("#deleteText")
    const deleteModalBtn = document.querySelector("#deleteBtn")
    deleteModalText.textContent = `Are you sure that you want to delete "${eventName}" event?`

    deleteModalBtn.addEventListener("click", () => {
        events.delete(eventKey)
        td.classList.remove("event")
        td.textContent = ""

    })

}

function fillterByName(select) {//Return new Map with filtered values
    const fillterEvents = new Map()
    for (const [key, member] of events) {
        if (member.members.includes(select.value)) {
            fillterEvents.set(key, member)
        }
    }
    return fillterEvents
}

selectFillter.addEventListener("change", () => {//Event filtering calendar
    clearCalendar()
    if (selectFillter.value === "All members") {
        fillCalendar(events)
    }
    if (selectFillter.value != "All members") {
        fillCalendar(fillterByName(selectFillter))
    }

})

{//Drag and Drop
    let dragged = null

    document.addEventListener("dragstart", (e) => {
        if (e.target.className === "calendar-time event") {
            dragged = e.target
            e.target.style.opacity = .5;
        } else {
            e.preventDefault()
        }
    }, false)

    document.addEventListener("dragend", function (e) {
        // reset the transparency
        e.target.style.opacity = "";
    }, false);

    document.addEventListener("dragover", function (e) {
        // prevent default to allow drop
        e.preventDefault();
    }, false)

    document.addEventListener("dragenter", (e) => {
        e.preventDefault()
        if (e.target.className === "calendar-time") {
            e.target.style.background = "#75D19D"
            e.target.style.opacity = 0.5
        }
    }, false)

    document.addEventListener("dragleave", function (e) {
        // reset background of potential drop target when the draggable element leaves it
        if (e.target.className === "calendar-time") {
            e.target.style.background = ""
            e.target.textContent = ""

        }

    }, false)

    document.addEventListener("drop", function (e) {
        // prevent default action (open as link for some elements)
        e.preventDefault();
        if (e.target.className === "calendar-time" && selectFillter.value === "All members") {
            e.target.style.background = ""
            e.target.style.opacity = 1
            events.set(e.target.title, events.get(dragged.title))
            events.delete(dragged.title)
            fillCalendar(events)
        }
        if (e.target.className === "calendar-time" && selectFillter.value != "All members") {
            e.target.style.background = ""
            e.target.style.opacity = 1
            events.set(e.target.title, events.get(dragged.title))
            events.delete(dragged.title)
            fillCalendar(fillterByName(selectFillter))
        }
    })
}