// Element Selection:

let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let result = document.querySelector("#result")

// Form Event - Submit:

form.addEventListener("submit", function (event) {
    event.preventDefault()

    // Extract Value:

    let name = inputs[0].value.trim()
    let rollNo = parseInt(inputs[1].value.trim())
    let engMarks = parseFloat(inputs[2].value)
    let mathMarks = parseFloat(inputs[3].value)
    let compMarks = parseFloat(inputs[4].value)

    // Find Total Marks & Percentage:

    let totalMarks = engMarks + mathMarks + compMarks
    let percentage = ((totalMarks / 300) * 100).toFixed(2)

    // Grade, Status & Class:

    let grade = ""
    let status = ""
    let statusClass = ""

    // Find Grade, Status & Class Using if else if Ladder:

    if (percentage >= 90) {
        grade = `A+`
        status = "Outstanding! You have passed"
        statusClass = "pass"

    } else if (percentage >= 80) {
        grade = `A`
        status = "Excellent! You have passed"
        statusClass = "pass"

    } else if (percentage >= 70) {
        grade = `B`
        status = "Good job! You have passed"
        statusClass = "pass"

    } else if (percentage >= 60) {
        grade = `C`
        status = "Satisfactory! You have passed"
        statusClass = "pass"

    } else if (percentage >= 40) {
        grade = `D`
        status = "Needs Improvement! You have passed"
        statusClass = "pass"

    } else {
        grade = `E`
        status = "Failed"
        statusClass = "fail"
    }

    // Show Result:

    result.style.display = "block"
    result.innerHTML = `
    <strong>Name: </strong> ${name} <br> 
    <strong>Roll No: </strong> ${rollNo} <br>
    <strong>Total Marks: </strong> ${totalMarks}/300 <br>
    <strong>Percentage: </strong> ${percentage}% <br>
    <strong>Grade: </strong> ${grade} <br>
    <strong>Status: </strong> <span class="${statusClass}">${status}</span>
    `;

})
