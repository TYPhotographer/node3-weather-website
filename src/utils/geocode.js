const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2FtMDAxNDI1IiwiYSI6ImNrdjY5ajZtNzRsZmwyd3E5bDR2eGYyeHIifQ.u1mzHg6N6eIYXmwZkc8AaQ&limit=1`
  request({ url, json: true }, (error, res) => {
    if(error) {
      callback('Unable to connect location services')
    } else if (res.body.features.length === 0) {
      callback('Unable to find location. Try another search.')
    } else {
      callback(undefined, {
        letitude: res.body.features[0].center[0],
        longitude: res.body.features[0].center[1],
        location: res.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode