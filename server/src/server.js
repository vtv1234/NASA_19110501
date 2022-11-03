const PORT = process.argv.PORT || 8000;
const http = require('http');
const { set } = require('./app');

const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');


const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    });
}
startServer();

