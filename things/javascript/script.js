console.log("Hello world!");

function runCode() {
    const inputText = inputField.value;
    let outputText = [];
    let originalLog = console.log;

    try {
        // hijacking console.log isn't ideal but it's the best i could come up with
        console.log = (...args) => {
            outputText.push(args.join(" "));
        };

        eval(inputText);
    } catch (error) {
        outputText.push(
            `Line ${error.lineNumber || 0}: ${error.name}: ${error.message}`
        );
    } finally {
        console.log = originalLog;
    }
    outputField.innerText = outputText.join("\n");
}
window.runCode = runCode;
