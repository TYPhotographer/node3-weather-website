console.log('JS read.')

function fetchWeather (address) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/weather?address=${address}`).then((res) => {
      res.json().then((data) => {
        if(data.error) {
          reject(data.error)
        } else {
          const { location, forecast } = data
          resolve({
            location,
            forecast
          })
        }
      })
    })
  })
}
window.onload = () => {
  const weatherForm = document.querySelector('form#weather')
  const search = document.querySelector('input')
  const messageOne = document.querySelector('#message-1')
  const messageTwo = document.querySelector('#message-2')

  // loading
  weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'loading...'
    messageTwo.textContent = ''
    fetchWeather(search.value).then(({location, forecast}) => {
      messageOne.textContent = `Location: ${location}`
      messageTwo.textContent = `Forecast: ${forecast}`
    }).catch((error) => {
      messageOne.textContent = error
    })
  })
  // console.log(weatherForm)
}