let deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

function shuffle(url) {
    return new Promise((resolve,reject) => {
        let res = axios.get(url);
        resolve(res)
        reject(err)
    })
}

function drawCard(deckId) {
    let drawUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    return new Promise((resolve,reject) => {
        let res = axios.get(drawUrl);
        resolve(res)
        reject(err)
    })
}

shuffle(deckUrl)
    .then(res => {
        deckId = res.data.deckId;
        return drawCard(res.data.deck_id);
    })
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        return drawCard(res.data.deck_id)
    })
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        return res.data.deck_id
    })
    .then(res => {
        deckId = res
    })
    .catch(err => console.log(err));

console.log(deckId)