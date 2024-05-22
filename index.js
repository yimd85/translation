const express = require('express');
const app = express();


const germanData = {
    "title": "Willkommen zu react und react-i18next",
    "description": {
        "part1": "Um loszulegen, ändere <1>src/App(DE).js</1> und speichere um neuzuladen.",
        "part2": "Wechsle die Sprache zwischen deutsch und englisch mit Hilfe der beiden Schalter."
    }
};

const englishData = {
    "title": "Welcome to react using react-i18next",
    "description": {
        "part1": "To get started, edit <1>src/App.js</1> and save to reload.",
        "part2": "Switch language between english and german using buttons above."
    }
};

app.get('/data', (req, res) => {
    const lang = req.query.lang;
    if (lang === 'de') {
        res.json(germanData);
    } else {
        res.json(englishData);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});