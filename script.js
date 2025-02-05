// Event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
    const healthForm = document.getElementById("healthForm");

    if (healthForm) {
        healthForm.addEventListener("submit", handleFormSubmission);
    }
});

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve and validate input values
    const weight = getNumericInput("weight");
    const height = getNumericInput("height");
    const age = getNumericInput("age");

    if (!weight || !height || !age) {
        displayTips("Please enter valid values for all fields.");
        return;
    }

    // Calculate BMI and display health tips
    const bmi = calculateBMI(weight, height);
    const tips = generateHealthTips(bmi);
    displayTips(tips);
}

// Function to get and validate numeric input
function getNumericInput(elementId) {
    const value = parseFloat(document.getElementById(elementId)?.value);
    return isNaN(value) || value <= 0 ? null : value;
}

// Function to calculate BMI
function calculateBMI(weight, height) {
    return weight / ((height / 100) ** 2);
}

// Function to generate personalized health tips
function generateHealthTips(bmi) {
    if (bmi < 18.5) {
        return "You are underweight. Consider a balanced diet with higher calorie intake.";
    } else if (bmi < 24.9) {
        return "You have a healthy weight. Keep up the good work and stay active!";
    } else if (bmi < 29.9) {
        return "You are overweight. A balanced diet and regular exercise can help you reach your goals.";
    } else {
        return "You are obese. It is advisable to consult a healthcare professional for personalized advice.";
    }
}

// Function to display health tips
function displayTips(message) {
    const tipsContent = document.getElementById("tipsContent");
    if (tipsContent) {
        tipsContent.innerHTML = `<p>${message}</p>`;
    }
}

// Highlight the active page link
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});