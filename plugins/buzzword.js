var buzzWords = {
    "android": "R dot ID dot",
    "swift": "Are you using Kotlin?",
    "dramamine": "If I get 1000 people to join the Dollar Shave Club, I get 83 years of free razers.",
    "gucci": "Did you go to bed last night?",
    "gucci gang": "Gucci gang, Gucci gang, Gucci gang, Gucci gang\nGucci gang, Gucci gang, Gucci gang (Gucci gang!)",
    "kanye": "Buy some Kanye Coin!",
    "slurp": "You up for a slup?",
    "diesel": "Gotta drink that Mid",
    "rinsed": "I got Rinsed!"
};

exports.run = (message) => {
    let content = message.content.toLowerCase();

    if (buzzWords[content]) {
        message.channel.send(buzzWords[content]);
    }
}