const request = require('request')

const forecast = (lon, lat, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=dce685c61e412bc406e2a10d972a040e&query=${lon},${lat}`
  request({ url, json: true }, (error, res) => {
    if(error) {
      callback('Unable to connect the services')
    } else if (res.body.error) {
      console.log(res.body.error)
      callback('Unable to find location')
    } else {
      const { temperature } = res.body.current
      callback(undefined, `It is current ${temperature} degree up.` )
    } 
  })
}

module.exports = forecast