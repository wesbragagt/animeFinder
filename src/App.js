import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Nav/Navbar';
import axios from 'axios';
class App extends Component {
    state = {
        animeList: []
    };
    async componentDidMount() {
        const response = await axios.get(
            'https://kitsu.io/api/edge/anime?filter[text]=naruto'
        );
        const {data: { data: animes}} = response;
        console.log('animes',animes);
        this.setState({
            animeList: animes
        });
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                <Navbar />
            </div>
        );
    }
}

export default App;
