const alternatingCharacters = (s) => {
    let numberOfDeletions = 0;

    [...s].forEach((item, index, array) => {
        if(item === array[index+1]) {
            numberOfDeletions++;
        }
    });
    return numberOfDeletions
}




module.exports = alternatingCharacters