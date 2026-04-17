<<<<<<< HEAD
const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContent = document.getElementById('weatherContent');
const loader = document.getElementById('loader');

const getWeather = async (city) => {
    if (!city) return;
    
    loader.classList.remove('d-none');
    weatherContent.classList.add('d-none');

    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`);
        if (!response.ok) throw new Error('Ciudad no encontrada');
        
        const data = await response.json();
        renderWeather(data);
    } catch (err) {
        alert(err.message);
    } finally {
        loader.classList.add('d-none');
    }
};

const renderWeather = (data) => {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind').textContent = `${data.wind.speed} km/h`;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    
    weatherContent.classList.remove('d-none');
};

// Eventos
searchBtn.addEventListener('click', () => getWeather(cityInput.value));
cityInput.addEventListener('keypress', (e) => e.key === 'Enter' && getWeather(cityInput.value));
=======
const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContent = document.getElementById('weatherContent');
const loader = document.getElementById('loader');

const getWeather = async (city) => {
    if (!city) return;
    
    loader.classList.remove('d-none');
    weatherContent.classList.add('d-none');

    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`);
        if (!response.ok) throw new Error('Ciudad no encontrada');
        
        const data = await response.json();
        renderWeather(data);
    } catch (err) {
        alert(err.message);
    } finally {
        loader.classList.add('d-none');
    }
};

const renderWeather = (data) => {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind').textContent = `${data.wind.speed} km/h`;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    
    weatherContent.classList.remove('d-none');
};

// Eventos
searchBtn.addEventListener('click', () => getWeather(cityInput.value));
cityInput.addEventListener('keypress', (e) => e.key === 'Enter' && getWeather(cityInput.value));
>>>>>>> 9c9f254287281dbaa10a324d97b56e402f3eccce
document.getElementById('closeBtn').addEventListener('click', () => weatherContent.classList.add('d-none'));