require('dotenv').config()
require('./db/database_connect')
const app = require('./app')
const PORT = process.env.PORT



app.listen(PORT, () => {
    console.log(`The server running at http://localhost:${PORT}`);
})