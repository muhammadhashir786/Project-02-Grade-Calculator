document.getElementById('calc-btn').addEventListener('click', function () {
    // Inputs ki values lena
    const english = parseFloat(document.getElementById('english').value);
    const maths = parseFloat(document.getElementById('maths').value);
    const science = parseFloat(document.getElementById('science').value);
    const computer = parseFloat(document.getElementById('computer').value);

    // Input Validation (check karna k koi field khali na ho ya invalid value na ho)
    if (
        isNaN(english) || isNaN(maths) || isNaN(science) || isNaN(computer) ||
        english < 0 || english > 100 ||
        maths < 0 || maths > 100 ||
        science < 0 || science > 100 ||
        computer < 0 || computer > 100
    ) {
        alert('Bhai tamam subjects ke valid marks (0 se 100 ke darmiyan) enter karein!');
        return;
    }

    // Total Marks aur Percentage calculate karna
    const totalObtained = english + maths + science + computer;
    const percentage = (totalObtained / 400) * 100;

    // Grade aur Status decide karna
    let grade = '';
    let status = '';

    if (percentage >= 80) {
        grade = 'A+';
        status = 'Pass';
    } else if (percentage >= 70) {
        grade = 'A';
        status = 'Pass';
    } else if (percentage >= 60) {
        grade = 'B';
        status = 'Pass';
    } else if (percentage >= 50) {
        grade = 'C';
        status = 'Pass';
    } else {
        grade = 'F';
        status = 'Fail';
    }

    // DOM mein values show karana
    document.getElementById('total-marks').textContent = totalObtained;
    document.getElementById('percentage').textContent = percentage.toFixed(2); // 2 decimal points tak
    document.getElementById('grade').textContent = grade;

    const statusElement = document.getElementById('status');
    statusElement.textContent = status;
    statusElement.className = status === 'Pass' ? 'pass' : 'fail';

    // Result div ko visible karna
    document.getElementById('result').classList.remove('hidden');
});