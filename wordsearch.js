// collab with Rebeccab

const wordSearch = (letters, word) => { 
    if (letters.length === 0 || !word) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true 
        }
    }

    //transpose

    let result = [];
    for (let j = 0; j < letters.length; j++) {
        for (let i = 0;  i < letters[i].length; i++) {
            if (!Array.isArray(result[i])) {
                result[i] = [];
            }
            result[i][j] = letters[j][i];
        }
    }

    let vertical = result.map(ls => ls.join(''));
    for (const index of vertical) {
        if (index.includes(word)) {
            return true;
        }
    }

    return false;
}

module.exports = wordSearch