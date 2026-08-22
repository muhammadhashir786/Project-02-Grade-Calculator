let inputs = document.querySelectorAll("input");
let box = document.querySelector("#box");

function showGrade(event) {
    event.preventDefault();

    // Inputs values
    let name = inputs[0].value;
    let rollNo = Number(inputs[1].value);
    let engMarks = Number(inputs[2].value);
    let mathMarks = Number(inputs[3].value);
    let compMarks = Number(inputs[4].value);

    // Calculations
    let totalMarks = 300;
    let obtainMarks = engMarks + mathMarks + compMarks;
    let numericPercentage = (obtainMarks / totalMarks) * 100;
    let percentage = numericPercentage.toFixed(2);
    let average = (obtainMarks / 3).toFixed(2);

    // Grade & Status Logic
    let grade = "";
    let status = "";
    let badgeClass = "badge-pass";

    if (numericPercentage >= 90) {
        grade = "A+";
        status = "Congratulations! You Passed";
    } else if (numericPercentage >= 80) {
        grade = "A";
        status = "Great! You Passed";
    } else if (numericPercentage >= 70) {
        grade = "B";
        status = "Amazing! You Passed";
    } else if (numericPercentage >= 60) {
        grade = "C";
        status = "Nice! You Passed";
    } else if (numericPercentage >= 50) {
        grade = "D";
        status = "You Passed";
    } else if (numericPercentage >= 40) {
        grade = "E";
        status = "You Passed";
    } else {
        grade = "F";
        status = "Sorry! You Failed";
        badgeClass = "badge-fail";
    }

    // Result Container Target / Creation
    let resultBox = document.querySelector("#resultBox");

    // Modern UI Structure Insert karna
    resultBox.innerHTML = `
    <div class="result-row">
      <span>Student Name:</span> <strong>${name}</strong>
    </div>
    <div class="result-row">
      <span>Roll No:</span> <strong>${rollNo}</strong>
    </div>
    <div class="result-row">
      <span>Marks Obtained:</span> <strong>${obtainMarks} / ${totalMarks}</strong>
    </div>
    <div class="result-row">
      <span>Percentage:</span> <strong>${percentage}%</strong>
    </div>
    <div class="result-row">
      <span>Average:</span> <strong>${average}</strong>
    </div>
    <div class="result-row">
      <span>Grade:</span> <strong>${grade}</strong>
    </div>
    <div class="result-row">
      <span>Status:</span> <span class="${badgeClass}">${status}</span>
    </div>
  `;

    // Result box ko show karana
    resultBox.classList.remove("hidden");
}

// Clear button ke liye Result hide karne ka function
function clearResult() {
    let resultBox = document.querySelector("#resultBox");
    if (resultBox) {
        resultBox.classList.add("hidden");
        resultBox.innerHTML = "";
    }
}