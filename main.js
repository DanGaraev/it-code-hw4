const apiKey = 'e50ce621b49c4d7d805171846232904';

// Получаем название города

const form = document.querySelector('.form');
const input = document.querySelector('.input');
let city;

// Слушаем отправку формы

form.onsubmit = function(e) {
    // Отмена отправки формы
    e.preventDefault();

    // Принимаем город
    city = input.value.trim();

    // Делаем запрос на сервер
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    // Выполняем запрос
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector('.country_value').innerHTML = data.location.country;
            document.querySelector('.region_value').innerHTML = data.location.region;
            document.querySelector('.city_value').innerHTML = data.location.name;
            document.querySelector('.temp_value').innerHTML = `${data.current.temp_c} °C`;
            document.querySelector('.fl_value').innerHTML = `${data.current.feelslike_c} °C`;
            document.querySelector('.wind_value').innerHTML = `${(data.current.wind_kph*1000/3600).toFixed(2)} м/с`;
        });
}
