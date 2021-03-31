function sortFrequency(string) {
    let stack = {};
    for(let char of string) {
        stack[char] ? stack[char]++ : stack[char] = 1;
    } //store character frequency

    let sortedChars = Object.keys(stack).sort((a, b) => stack[b] - stack[a]);
    // sort character frequency in descending order

    let result = "";

    for(let char of sortedChars) {
        result += char.repeat(stack[char]);
    } //iterate through array while appending character appearances to result

    return result;
}

// First Version 
function validPalindrome2(string) {
    let start = 0;
    let end = string.length - 1;

    while(start < end) {
        if(string[start] !== string[end]) {
            return isValid(string.slice(start, end)) || isValid(string.slice(start + 1, end + 1));
        }
    }

    return true;
} 

function isValid(string) {
    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Second Version
function validPalindrome3(string) {
    let start = 0;
    let end = string.length - 1;

    let isPalindrome = function(string, start, end) {
        while(start < end) {
            if(string.charAt(start++) !== string.charAt(end--)) {
                return false;
            }
        }
        return true;
    }

    while(start < end) {
        if(string.charAt(start) !== strstartng.charAt(end)) {
            return isPalindrome(string, start + 1, end) || isPalindrome(string, start, end - 1);
        }
        start++;
        end --;
    }
    return true;
}