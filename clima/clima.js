const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d55f2f1100e8d2c575af0d0139f72212&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}