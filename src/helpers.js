
const choice = (arr) => {
    let int = arr.length
    let idx = Math.floor(Math.random() * int);
    console.log (arr[idx]);
}

const remove = (arr, el) => {
    if (el) {
        let idx = arr.indexOf(el);
        arr = arr.splice(idx, 1);
        console.log(el);
    }
    else {
        console.log(`${el} does not exist`);
    }
}

export { choice, remove };