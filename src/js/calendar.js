
export default function createCalendar(container, hours, days) {//Create HTML table
    const row = document.createElement("div")
    const calendar = document.createElement("table")

    calendar.className = "table table-bordered"
    row.className = "row"

    container.appendChild(row)
    row.appendChild(calendar)

    createTableHead(calendar, days)
    createTableBody(calendar, hours, days)
}

function createTableBody(calendar, hours, days) {//Creating HTML Table Body
    const tableBody = document.createElement("tbody")

    for (const hour of hours) {
        const tableRow = document.createElement("tr")
        const th = document.createElement("th")

        tableBody.appendChild(tableRow)
        tableRow.appendChild(th)

        th.textContent = hour
        for (let i = 0; i < days.length; i++) {
            const td = document.createElement("td")

            td.className = "calendar-time"
            td.title = days[i] + hour
            tableRow.appendChild(td)
        }
    }

    calendar.appendChild(tableBody)
}

function createTableHead(calendar, days) {//Creating HTML Table Head
    const tableHead = document.createElement("thead")
    const tableRow = document.createElement("tr")
    const th = document.createElement("th")
    th.textContent = "Time"
    th.scope = "col"
    tableRow.appendChild(th)
    for (const day of days) {
        const th = document.createElement("th")
        th.textContent = day
        th.scope = "col"
        tableRow.appendChild(th)
    }

    tableHead.appendChild(tableRow)
    calendar.appendChild(tableHead)
}

