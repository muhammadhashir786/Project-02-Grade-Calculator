let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let box = document.querySelector("#box")
let result = document.querySelector("#result")

function calculateGrade(event) {
    event.preventDefault()

    let name = inputs[0].value
    let rollNo = parseFloat(inputs[1].value)
    let engMarks = parseFloat(inputs[2].value)
    let mathMarks = parseFloat(inputs[3].value)
    let compMarks = parseFloat(inputs[4].value)

    let totalMarks = engMarks + mathMarks + compMarks
    let percentage = ((totalMarks / 300) * 100).toFixed(2)

    let grade = ""
    let status = ""
    let statusClass = ""

    if (percentage >= 90 && percentage <= 100) {
        grade = `A+`
        status = "Great! you have passed"
        statusClass = "pass"

    } else if (percentage >= 80 && percentage <= 89.99) {
        grade = `A`
        status = "Amazing! you have passed"
        statusClass = "pass"

    } else if (percentage >= 70 && percentage <= 79.99) {
        grade = `B`
        status = "Nice! you have passed"
        statusClass = "pass"

    } else if (percentage >= 60 && percentage <= 69.99) {
        grade = `C`
        status = "Very Good! you have passed"
        statusClass = "pass"

    } else if (percentage >= 40 && percentage <= 59.99) {
        grade = `D`
        status = "Good! you have passed"
        statusClass = "pass"

    } else {
        grade = `E`
        status = "Damn! You Failed"
        statusClass = "fail"
    }

    result.style.display = "block"

    result.innerHTML = `<strong>Name: </strong> ${name} <br> 
    <strong>Roll No: </strong> ${rollNo} <br>
    <strong>Total Marks: </strong> ${totalMarks}/300 <br>
    <strong>Percentage: </strong> ${percentage}% <br>
    <strong>Grade: </strong> ${grade} <br>
    <strong>Status: </strong> <span class="${statusClass}">${status}</span>`
}