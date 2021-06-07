const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 80; 
const path = require('path');
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static("app"));
// create a GET route
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '/app/index.html'));
}); 