const app = require('./server.js');

const PORT = 4000;


app.listen(PORT, () => {
    console.log(`*** Server running on localhost:${PORT} ***`);
});

