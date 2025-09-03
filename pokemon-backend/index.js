import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to the Pokémon Card API!");
});
//define a simple route

//read the cards from a json file
let cards = JSON.parse(fs.readFileSync("cards.json", "utf-8"));

function saveCardsToFile() {
    fs.writeFileSync("cards.json", JSON.stringify(cards, null, 2));
}

//CRUD operations for cards;
app.get("/cards", (req, res) => {
    res.json(cards);
});

app.get("/cards/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const card = cards.find(c => c.id === id);
    if (!card) {
        return res.status(404).send("Card not found");
    }
    res.json(card);
});

let nextId = 4;

app.post("/cards", (req, res) => {
    const newCard = req.body;
    newCard.id = nextId++;
    cards.push(newCard);
    res.status(201).json(newCard);
    saveCardsToFile();
});

app.put("/cards/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCard = req.body;

    let card = cards.find(c => c.id === id);
    if (!card) {
        return res.status(404).send("Card not found");
    }
    card.name = updatedCard.name || card.name;
    card.type = updatedCard.type || card.type;
    res.json(card);
    saveCardsToFile();

});

app.delete("/cards/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const cardIndex = cards.findIndex(c => c.id === id);

    if (cardIndex === -1) {
        return res.status(404).send("Card not found");
    }

    const deletedCard = cards.splice(cardIndex, 1)[0]; // grab the object itself
    saveCardsToFile(); // 👈 persist changes to file

    res.status(200).json(deletedCard); // send back the deleted card for confirmation
});

//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});