const phrases = [
    ["I go", "voy"],
    ["You go", "vas"],
    ["He goes", "va"],
    ["We go", "vamos"],
    ["They go", "van"],
    ["I want", "quiero"],
    ["You want", "quieres"],
    ["She wants", "quiere"],
    ["We want", "queremos"],
    ["They want", "quieren"],
    ["I eat", "como"],
    ["You eat", "comes"],
    ["He eats", "come"],
    ["We eat", "comemos"],
    ["They eat", "comen"],
    ["I drink", "bebo"],
    ["You drink", "bebes"],
    ["She drinks", "bebe"],
    ["We drink", "bebemos"],
    ["They drink", "beben"],
    ["Do you eat?", "¿comes?"],
    ["He does not write", "no escribe"],
    ["We do not read", "no leemos"],
    ["Do they speak?", "¿hablan?"],
    ["She does not sing", "no canta"],
    ["Do you (formal) drink?", "¿bebe?"],
    ["They (feminine) do not dance", "no bailan"],
    ["Do we (feminine) study?", "¿estudiamos?"],
    ["I do not live", "no vivo"]
];

function getRandomPhrases(num) {
    const shuffled = phrases.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("translationForm");
    const phrasesDiv = document.getElementById("phrases");
    const startTimeInput = document.getElementById("start_time");

    startTimeInput.value = Date.now();

    const randomPhrases = getRandomPhrases(10);
    randomPhrases.forEach((phrase, index) => {
        const div = document.createElement("div");
        div.className = "phrase";
        div.innerHTML = `
            <label for="translation${index}">${phrase[0]}:</label>
            <input type="text" id="translation${index}" name="translation">
        `;
        phrasesDiv.appendChild(div);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const startTime = parseFloat(formData.get("start_time"));
        const translations = formData.getAll("translation");
        let penalty = 0;
        const incorrectAnswers = [];

        randomPhrases.forEach((phrase, index) => {
            if (translations[index].trim().toLowerCase() !== phrase[1].toLowerCase()) {
                penalty += 30;
                incorrectAnswers.push([phrase[0], translations[index], phrase[1]]);
            }
        });

        const endTime = Date.now();
        const totalTime = (endTime - startTime) / 1000 + penalty;

        let resultHtml = `<p class="score">Your total time is ${totalTime.toFixed(2)} seconds (including penalties).</p>`;
        if (incorrectAnswers.length > 0) {
            resultHtml += `<h2>Incorrect Answers:</h2><ul>`;
            incorrectAnswers.forEach(answer => {
                resultHtml += `<li class="incorrect">${answer[0]}: You answered "${answer[1]}", correct answer is "${answer[2]}"</li>`;
            });
            resultHtml += `</ul>`;
        }
        resultHtml += `<a href="/">Try Again</a>`;

        document.body.innerHTML = resultHtml;
    });
});