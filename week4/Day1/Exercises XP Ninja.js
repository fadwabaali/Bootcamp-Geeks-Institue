// Exercise 1 : Merge Words

// Currying function to merge words
const mergeWords = (string) => {
    return (nextString) => {
        if (nextString === undefined) {
            return string;
        } else {
            return mergeWords(`${string} ${nextString}`);
        }
    };
};

// Example usage
console.log(mergeWords('There')('is')('no')('spoon.')()); // 'There is no spoon.'
console.log(mergeWords('Hello')()); // 'Hello'