const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());

const googlePlacesApiKey = 'AIzaSyAIufYP8zwK3UsQX5KbwAtELdQbS_2pqPY';

app.post('/api/places', async (req, res) => {
  try {
    const { location } = req.body;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=5000&type=hospital&key=${googlePlacesApiKey}`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching places:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
