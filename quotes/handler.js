const QUOTES = require("./data/index.json");

const randomMathal = () => {
   return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

const randomTen = () => {
    let randomList = new Set();

    // Prevent infinite loop if QUOTES has less than 10 items
    let count = Math.min(10, QUOTES.length);

    while (randomList.size < count) {
        let random = Math.floor(Math.random() * QUOTES.length);
        randomList.add(random);
    }

    return [...randomList].map(index => QUOTES[index]); 
}

module.exports = { randomMathal, randomTen };
