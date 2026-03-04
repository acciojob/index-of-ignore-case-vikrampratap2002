function indexOfIgnoreCase(str, subStr) {
  // write your code here
	    if (subStr === "") return 0;

    str = str.toLowerCase();
    subStr = subStr.toLowerCase();

    for (let i = 0; i <= str.length - subStr.length; i++) {
        if (str.substring(i, i + subStr.length) === subStr) {
            return i;
        }
    }

    return -1;
}

// Please do not change the code below 

const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
