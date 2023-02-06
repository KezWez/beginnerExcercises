function showRating(rating) {
    let ratings = ''
    for (let i = 0; i < Math.floor(rating); i++) {
        if (i === Math.floor(rating-1)) {
            ratings += '*'
        }
        else {
            ratings += '* '
        }
    }    
    if (!Number.isInteger(rating)) {
        ratings += ' .'
    }
    return ratings
}

console.log(showRating(4.5))