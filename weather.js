window.addEventListener('load', () => {

    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.weatherstack.com/current?access_key=c7bb7ae4f7cc7093c0230f3ead8abf6d&query=${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    // console.log(data);
                    const {temperature, weather_descriptions} = data.current;
                    
                    //Set DOM elements from API

                    temperatureDescription.textContent = weather_descriptions;
                    temperatureDegree.textContent = temperature;
                    locationTimezone.textContent = data.location.name;

                });
        });
    }
    
});