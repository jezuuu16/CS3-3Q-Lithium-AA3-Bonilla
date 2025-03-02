function checkMessage(){

    let message = prompt("What's the secret code?:");
	let result;

    let hasFR = message.toLowerCase().indexOf("fr") !== -1;
    let hasAI = message.toLowerCase().indexOf("ai") !== -1;
    let hasMixedAI = message.indexOf("aI") !== -1 || message.indexOf("Ai") !== -1;


    if (hasFR && hasAI) {
        result = "legitimate!";
    } else if (hasFR) {
        result = "legitimate!";
    } else if (hasAI) {
        result = "tampered with!";
    } else if (hasMixedAI) {
        result = "tampered with!";
    } else {
        result = "not yet encoded!";
    }

    document.getElementById("result").innerHTML = `The message "${message}" is ${result}`;
}