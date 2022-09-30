window.onload = function () {
    document.getElementById("input").focus();
    document.getElementById("input").value = "";
    printLine("Welcome to my personal webpage!");
    printLine("Type 'docs' to learn some commands!");
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        printLine(document.getElementById("input").value);
        if (document.getElementById("input").value === "docs") {
            printLine("info - Some info on me!");
            printLine("youtube - Goes to my youtube.");
            printLine("exit - Exits the terminal.");
            printLine("light theme - turns on light theme. (for some reason).");
            printLine("dark theme - turns on dark theme.");
            printLine("updates - Shows what projects I'm working on!")
        } else if (document.getElementById("input").value === "info") {
            printLine("I'm impozible, or on some other platforms, xav. I program and make art. Type 'youtube' to go to my youtube.")
        } else if (document.getElementById("input").value === "youtube") {
            window.open("https://www.youtube.com/channel/UCfWHfXw-Dr4ghGBu51I8JyQ", '_blank');
        } else if (document.getElementById("input").value === "exit") {
            window.close();
        } else if(document.getElementById("input").value === "light theme"){
            document.body.style.backgroundColor = "white";
            document.getElementById("input").style.backgroundColor = "white";
            document.getElementById("input").style.color = "red";
            document.body.style.color = "red";
            document.getElementById("input").style.textShadow = "0px 0px 10px #ff0000";
            document.body.style.textShadow = "0px 0px 10px #ff0000";
        } else if(document.getElementById("input").value === "dark theme"){
            document.body.style.backgroundColor = "black";
            document.getElementById("input").style.backgroundColor = "black";
            document.getElementById("input").style.color = "#00ff00";
            document.body.style.color = "#00ff00";
            document.getElementById("input").style.textShadow = "0px 0px 10px #00ff00";
            document.body.style.textShadow = "0px 0px 10px #00ff00";
        } else if(document.getElementById("input").value === "updates"){
            printLine("I'm working on a typing game right now.")
        }
        document.getElementById("input").value = "";
    }
});

function printLine(string) {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(string);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("input");
    document.body.insertBefore(newDiv, currentDiv);
}
