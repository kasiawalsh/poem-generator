import express from 'express';
import chatCompletion from './services/openai.js';

const app = express();

app.use(express.static('public'));

app.get(
    '/test',
    async (req, res) => {
        const response = await chatCompletion("Provide an amusing sentence.");
        res.send(response);
    }
);

app.get(
    '/get-poem',
    async (req, res) => {
        const response = await chatCompletion(
            "Write a short, expressive poem about lemons, as if you are hungry. Just four lines!"
        );
        res.send({ poem: response });
    }
);


// app.get('/test', async (req, res) => {
//     try {
//         res.send("Hello from /test!");
//     } catch (error) {
//         console.error("Error in /test route:", error);
//         res.status(500).send("Internal server error");
//     }
// });

export default app; 