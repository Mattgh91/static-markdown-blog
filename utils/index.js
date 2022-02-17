export const sortByDate = (a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
};

export const splitString = (n, str) => {
    const arr = str?.split(' ');
    let result = []
    let subStr = arr[0]

    for (let i = 1; i < arr.length; i++) {
        let word = arr[i]
        if (subStr.length + word.length + 1 <= n) {
            subStr = subStr + ' ' + word
        } else {
            result.push(subStr);
            subStr = word
        }
    }

    if (subStr.length) {
        result.push(subStr)
    }

    return result;
}
