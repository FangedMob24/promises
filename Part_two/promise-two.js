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

function pressed() {
    drawCard($("#deck").attr("value"))
        .then(res => {
            $(".cards").append(`<p>${res.data.cards[0].value} of ${res.data.cards[0].suit}</p>`)
        })
        .catch(err => console.log(err));
}
$("input").on("click", pressed)

shuffle(deckUrl)
    .then(res => {
        deckId = res.data.deck_id;
        $("#deck").attr("value",`${deckId}`);
    })
    .catch(err => console.log(err));


