import express from 'express';
// using to build web server
import cors from 'cors';
// to allow requests from different origins
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
// simple chatbot logic
app.post('/chat', (req, res) => {
    const message = req.body.message.toLowerCase();
    // respond based on input message

    if (message.includes('jokes')) {
        res.json({ reply: 'Why don’t skeletons fight each other? They don’t have the guts!' });
    } else if (message.includes('weather')) {
        res.json({ reply: 'It’s sunny and 25°C outside!' });
    } else {
        res.json({ reply: "Sorry, I don't understand that." });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
