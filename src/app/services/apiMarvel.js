import axios from 'axios';

const apiMarvel = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public'

});

export default apiMarvel;


// baseURL: 'https://gateway.marvel.com/v1/public/characters?apikey=ad318f72becf23070f4b01a79ad99dae&hash=da7ffd1c15cf1c1f7e28a09f162837e4&ts=1609890812920'

//characters?apikey=ad318f72becf23070f4b01a79ad99dae&hash=da7ffd1c15cf1c1f7e28a09f162837e4&ts=1609890812920'

//const apiKey = 'characters?apikey=ad318f72becf23070f4b01a79ad99dae&hash=da7ffd1c15cf1c1f7e28a09f162837e4&ts=1609890812920';

//export default apiKey;