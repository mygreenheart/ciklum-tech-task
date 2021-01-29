// const calendarData = document.getElementsByClassName("calendar-time")
// const selectFillter = document.getElementById("fillter-member")
// const createEvent = document.getElementById("create-event")
// const events = new Map()
// const members = ["Alina", "Mark", "Sumail", "Kate"]


// export default function fillSelect(select, arr) {//Fill selects from arrays
//     arr.map(element => {
//         const option = document.createElement("option")
//         option.textContent = element
//         select.appendChild(option)
//         return option
//     })
// }

// function fillCalendar(eventMap) {//Fill calendar events from events Map
//     clearCalendar()
//     for (const [eventKey, eventData] of eventMap) {//Add event component to table
//         for (const td of calendarData) {
//             if (td.title === eventKey) {
//                 eventComponent(td, eventKey, eventData.eventName)
//             }
//         }
//     }

// }

// function clearCalendar() {
//     for (const td of calendarData) {//Clear calendar
//         td.textContent = ''
//         td.classList.remove("event")
//     }
// }

// function eventComponent(td, eventKey, eventName) {//Create event component 
//     const div = document.createElement("div")
//     const spanClose = document.createElement("span")
//     const eventText = document.createElement("p")

//     td.classList.add("event")
//     td.draggable = true

//     spanClose.textContent = "×"
//     spanClose.style.cursor = "pointer"
//     spanClose.setAttribute("data-target", "#deleteModal")
//     spanClose.setAttribute("data-toggle", "modal")

//     spanClose.addEventListener("click", () => {
//         deleteModal(td, eventKey, eventName)
//     })

//     eventText.textContent = eventName
//     td.appendChild(div)
//     div.appendChild(eventText)
//     div.appendChild(spanClose)

// }

// function deleteModal(td, eventKey, eventName) {//Delete modal event
//     const deleteModalText = document.getElementById("deleteText")
//     const deleteModalBtn = document.getElementById("deleteBtn")
//     deleteModalText.textContent = `Are you sure that you want to delete "${eventName}" event?`

//     deleteModalBtn.addEventListener("click", () => {
//         events.delete(eventKey)
//         td.classList.remove("event")
//         td.textContent = ""

//     })

// }

// function createCalendar() {//Create HTML table
//     const row = document.createElement("div")
//     const calendar = document.createElement("table")

//     calendar.className = "table table-bordered"
//     calendar.id = "calendar"
//     row.className = "row"

//     container.appendChild(row)
//     row.appendChild(calendar)

//     fillSelect(selectFillter, members)

//     createTableHead(calendar)
//     createTableBody(calendar)
// }

// function createTableBody(calendar) {//Creating HTML Table Body
//     const tableBody = document.createElement("tbody")

//     for (const hour of hours) {
//         const tableRow = document.createElement("tr")
//         const th = document.createElement("th")

//         tableBody.appendChild(tableRow)
//         tableRow.appendChild(th)

//         th.textContent = hour
//         for (let i = 0; i < days.length; i++) {
//             const td = document.createElement("td")

//             td.className = "calendar-time"
//             td.title = days[i] + hour
//             tableRow.appendChild(td)
//         }
//     }

//     calendar.appendChild(tableBody)
// }

// function createTableHead(calendar) {//Creating HTML Table Head
//     const tableHead = document.createElement("thead")
//     const tableRow = document.createElement("tr")
//     const th = document.createElement("th")
//     th.textContent = "Time"
//     th.scope = "col"
//     tableRow.appendChild(th)
//     for (const day of days) {
//         const th = document.createElement("th")
//         th.textContent = day
//         th.scope = "col"
//         tableRow.appendChild(th)
//     }

//     tableHead.appendChild(tableRow)
//     calendar.appendChild(tableHead)
// }

// function fillterByName(select) {//Return new Map with filtered values
//     const fillterEvents = new Map()
//     for (const [key, member] of events) {
//         if (member.members.includes(select.value)) {
//             fillterEvents.set(key, member)
//         }
//     }
//     return fillterEvents
// }

// selectFillter.addEventListener("change", () => {//Event filtering calendar
//     clearCalendar()
//     if (selectFillter.value === "All members") {
//         fillCalendar(events)
//     }
//     if (selectFillter.value != "All members") {
//         fillCalendar(fillterByName(selectFillter))
//     }

// })

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


// createCalendar()

// {//Drag and Drop
//     let dragged = null

//     document.addEventListener("dragstart", (e) => {
//         if (e.target.className === "calendar-time event") {
//             dragged = e.target
//             e.target.style.opacity = .5;
//         } else {
//             e.preventDefault()
//         }
//     }, false)

//     document.addEventListener("dragend", function (e) {
//         // reset the transparency
//         e.target.style.opacity = "";
//     }, false);

//     document.addEventListener("dragover", function (e) {
//         // prevent default to allow drop
//         e.preventDefault();
//     }, false)

//     document.addEventListener("dragenter", (e) => {
//         e.preventDefault()
//         if (e.target.className === "calendar-time") {
//             e.target.style.background = "#75D19D"
//             e.target.style.opacity = 0.5
//         }
//     }, false)

//     document.addEventListener("dragleave", function (e) {
//         // reset background of potential drop target when the draggable element leaves it
//         if (e.target.className === "calendar-time") {
//             e.target.style.background = ""
//             e.target.textContent = ""

//         }

//     }, false)

//     document.addEventListener("drop", function (e) {
//         // prevent default action (open as link for some elements)
//         e.preventDefault();
//         if (e.target.className === "calendar-time" && selectFillter.value === "All members") {
//             e.target.style.background = ""
//             e.target.style.opacity = 1
//             events.set(e.target.title, events.get(dragged.title))
//             events.delete(dragged.title)
//             fillCalendar(events)
//         }
//         if (e.target.className === "calendar-time" && selectFillter.value != "All members") {
//             e.target.style.background = ""
//             e.target.style.opacity = 1
//             events.set(e.target.title, events.get(dragged.title))
//             events.delete(dragged.title)
//             fillCalendar(fillterByName(selectFillter))
//         }
//     })
// }