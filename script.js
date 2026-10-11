
const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');
const chartCountDisplay = document.getElementById('charCount');
const sentenceCountDisplay = document.getElementById('sentencenCount');
const paragraphCountDisplay = document.getElementById('paragraphCount');
const copyBtn = document.getElementById('copyBtn');


//  1. Listen for user input in real-time
textInput.addEventListener('input', updateStatistics);

//  2. The Core Counting Logic
function updateStatistics() {
    const text = textInput.value;

    //  Character Count (includes spaces)
    chartCountDisplay.textContent = text.length;

    //  Word Count 
    const words = text.match(/\S+/g) || [];
}