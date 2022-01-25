
const choice = (arr) => {
    let int = arr.length
    let idx = Math.floor(Math.random() * int);
    return(arr[idx]);
}

const remove = (arr, el) => {
    if (el) {
        let idx = arr.indexOf(el);
        arr.splice(idx, 1);
    }
    else {
        return `${el} does not exist`
    }
}

export { choice, remove };