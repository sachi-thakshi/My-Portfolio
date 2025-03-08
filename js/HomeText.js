const text = "Software Engineering Student & UI/UX Engineer   ";
const textContainer = document.getElementById("text-container");

let index = 0;

function displayLetterByLetter() {
    textContainer.innerHTML += text.charAt(index);
    index++;

    // Once the text is fully displayed, reset and start again
    if (index >= text.length) {
        index = 0;
        textContainer.innerHTML = ''; // Clear the text to start again
    }

    setTimeout(displayLetterByLetter, 100); // Adjust the delay for the effect
}

// Start the animation
displayLetterByLetter();