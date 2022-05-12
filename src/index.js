const messages = [
    "Samus",
    "Mario",
    "Link",
    "Luigi",
    "Falcon",
    "Fox",
    "Pikachu"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};