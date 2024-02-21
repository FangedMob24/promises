let url = "http://numbersapi.com/";
let favNum = 15;

// step 1

function myFavNumFact(url,favNum) {
    return new Promise((resolve,reject) => {
        let data = axios.get(`${url}${favNum}?json`);
        resolve(data);
    })
}

myFavNumFact(url,favNum)
    .then(res => console.log(res.data))

// step 2 and 3

function numFacts(url,num) {
    let nums = []

    for (let i = 1; i < 5; i++) {
        nums.push(
            axios.get(`${url}${num}?json`)
        )
    }
    return Promise.all(nums)
}

numFacts(url,favNum)
    .then(facts => {
        for (fact of facts) {
            $(".facts").append(`<p>${fact.data.text}</p>`)
        }
    })