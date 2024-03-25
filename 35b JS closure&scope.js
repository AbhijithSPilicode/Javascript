const NEG_INF = -1000000;

function createPop() {
    const title = this.title 
    let currIndex = NEG_INF;
    let check = false;

    function find(item, array) {
        const index = array.indexOf(item);
        if (index !== -1) {
            currIndex = index;
            check = true;
        }
    }

    return function(array, item) {
        find(item, array);
        if (check) {
            console.log(`The item is present and is at index ${currIndex}`);
        } else {
            console.log(`The item is not present and is at index ${currIndex}`);
        }
    };
}

// Example usage:
const popFunction = createPop();
const array = [1, 2, 3, 4, 5];
const itemToFind = 3;
popFunction(array, itemToFind); // Output: The item is present and is at index 2
