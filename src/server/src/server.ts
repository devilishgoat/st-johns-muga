const express = require('express'); 
import {getSpots} from './api'
const app = express(); 
const port = process.env.PORT || 80; 
const path = require('path');
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static("app"));
app.get('/spots', async (req:any, res:any) => {
    const spots = await getSpots();
    res.send(spots);
})
// create a GET route
app.get('/', (req:any, res:any) => { 
    res.sendFile(path.join(__dirname, '/app/index.html'));
}); 