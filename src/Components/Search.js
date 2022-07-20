import React, {useState} from 'react';
import axios from 'axios';

import { Container } from '../globalStyles';
import {SearchContainer, Input, FormButton, TextContainer} from './SearchStyles';

function Search() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [display, setDisplay] = useState(false);
    const [error, setError] = useState("");

    const APIkey= "604d67bc7c4112882fae44f98c2302e2";

    const handleInput = (e) =>{
        setDisplay(false);
        setError("");
        setCity(e.target.value);
    };

    const handleSearch = async () => {
        
        setError("");
        await axios.get('https://api.openweathermap.org/data/2.5/weather', {params:{
            q: city,
            appid: APIkey
          }})
          .then(function (response) {
            if(response.status === 200) setWeather(response.data.weather[0].description);
          })
          .catch(function (error) {
            setError(error.response.data.message);
          });
          
          setDisplay(true);
    }
    return (
        <Container>
            <SearchContainer>
                <Input type="text" placeholder="City" onChange={handleInput}/>
                <FormButton onClick={handleSearch} >Search</FormButton>
            </SearchContainer>
            <TextContainer>{(!error && display) ? `The current weather of ${city} is ${weather}`: null}</TextContainer>
            <TextContainer>{display && error ? error : null}</TextContainer>
        </Container>
    );
}

export default Search;