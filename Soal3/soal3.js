const balanceCheck = (str) => {
    if (!str || str.length % 2 !== 0) return false;

    const stack = []


    for (let bracket of str) {
        // Handle opening brackets
        if (bracket === '(' || bracket === '[' || bracket === '{') {
            stack.push(bracket);
            continue;
        }

        // If stack is empty but we found closing bracket
        if (stack.length === 0) return false;

        let lastChar = stack.pop();

        // Check matching pairs
        if (bracket === ')' && lastChar !== '(') return false;
        if (bracket === ']' && lastChar !== '[') return false;
        if (bracket === '}' && lastChar !== '{') return false;
    }

    console.log(stack)

    return stack.length === 0
}

const formSubmit = document.getElementById("button").onclick = (e) => {
    e = e || window.event;
    e.preventDefault()

    const input = document.getElementById("bracketInput").value;
    const bracketsArray = input.split("");

    const result = document.getElementById("text");
    result.innerHTML = balanceCheck(bracketsArray) ? "YES" : "NO";
}