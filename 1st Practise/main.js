let inputs = document.querySelectorAll("input")
let box = document.querySelector("#box")
// let p1 = document.querySelector("#p1")
// let p2 = document.querySelector("#p2")
// let p3 = document.querySelector("#p3")
// let p4 = document.querySelector("#p4")

function showGrade(event) {
    event.preventDefault()

    let name = inputs[0].value
    let rollNo = Number(inputs[1].value)
    let engMarks = Number(inputs[2].value)
    let mathMarks = Number(inputs[3].value)
    let compMarks = Number(inputs[4].value)

    let totalMarks = 300
    let obtainMarks = engMarks + mathMarks + compMarks
    let percentage = (obtainMarks / totalMarks * 100).toFixed(2)
    let grade;
    let status;

    if (percentage >= 90 && percentage <= 100) {
        grade = `Grade A+`;
        status = `Congratulations! you have passed`
    } else if (percentage >= 80 && percentage <= 89) {
        grade = `Grade A`;
        status = `Great! you have passed`
    } else if (percentage >= 70 && percentage <= 79) {
        grade = `Grade B`
        status = `Amazing! you have passed`
    } else if (percentage >= 60 && percentage <= 69) {
        grade = `Grade C`
        status = `Nice! you have passed`
    } else if (percentage >= 50 && percentage <= 59) {
        grade = `Grade D`
        status = `Very Good! you have passed`
    } else if (percentage >= 40 && percentage <= 49) {
        grade = `Grade E`
        status = `Good! you have passed`
    } else {
        grade = `Grade F`
        status = `Damn! You Failed`

    }

    let p1 = document.createElement("p")
    // let p2 = document.createElement("p")
    // let p3 = document.createElement("p")
    // let p4 = document.createElement("p")


    p1.id = "p1"
    // p2.id = "p2"
    // p3.id = "p3"
    // p4.id = "p4"

    // console.log(`Name: ${name}`);
    // console.log(`Roll No: ${rollNo}`);
    // console.log(`English Marks: ${engMarks}`);
    // console.log(`Math Marks: ${mathMarks}`);
    // console.log(`Computer Marks: ${compMarks}`);
    // console.log(`Total Marks: ${engMarks + mathMarks + compMarks}`);
    // console.log(`Percentage: ${obtainMarks / totalMarks * 100}%`);

    function clearResult() {
        p1.innerHTML = ""
    }

    p1.innerHTML = `Name: ${name} <br> Roll No: ${rollNo} <br> English Marks: ${engMarks} <br> Math Marks: ${mathMarks} <br> Computer Marks: ${compMarks} <br> Total Marks: ${obtainMarks} <br> Percentage: ${percentage}% <br> Grade: ${grade} <br> Status: ${status}`

    // p2.innerHTML = `Total Marks: ${obtainMarks}`
    // p3.innerHTML = `Percentage: ${percentage}%`
    // p4.innerHTML = `Grade: ${grade}`

    box.appendChild(p1)


    // box.appendChild(p2)
    // box.appendChild(p3)
    // box.appendChild(p4)
}

/** 
{
    let inputs = document.querySelectorAll(".all-input")
    // let marks = document.querySelector(".marks")
    let box = document.querySelector("#box")

    function showGrade(event) {
        event.preventDefault()

        let name = inputs[0].value
        let rollNo = Number(inputs[1].value)
        let engMarks = Number(inputs[2].value)
        let mathMarks = Number(inputs[3].value)
        let compMarks = Number(inputs[4].value)

        // let marks = Number(marks[0].value)
        // let marks = Number(marks[1].value)
        // let marks = Number(marks[2].value)

        // if (engMarks < 0 && engMarks > 100) {
        // p.style.display = "block"
        // p.innerHTML = "Please enter valid marks between (0 - 100)"
        // console.log("Please enter valid marks between (0 - 100)");
        // }

        // if (engMarks < 0 && mathMarks > 100) {
        // p.style.display = "block"
        // p.innerHTML = "Please enter valid marks between (0 - 100)"
        // console.log("Please enter valid marks between (0 - 100)");
        // }

        // if (engMarks < 0 && compMarks > 100) {
        // p.style.display = "block"
        // p.innerHTML = "Please enter valid marks between (0 - 100)"
        // console.log("Please enter valid marks between (0 - 100)");
        // }

        // p.style.display = "block"
        // p.innerHTML = ""

        console.log(name);
        console.log(rollNo);
        console.log(engMarks);
        console.log(mathMarks);
        console.log(compMarks);
    }

}
*/