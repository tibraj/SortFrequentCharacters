function sortFrequency(string) {
    let stack = {};
    for(let char of string) {
        stack[char] ? stack[char]++ : stack[char] = 1;
    }

    let sortedChars = Object.keys(stack).sort((a, b) => stack[b] - stack[a]);

    let result = "";

    for(let char of sortedChars) {
        result += char.repeat(stack[char]);
    }

    return result;
}