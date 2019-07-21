import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Nav/Navbar';
import AnimeList from './Component/Animes/AnimeList';
import Search from './Component/Animes/Search';
import axios from 'axios';
class App extends Component {
    state = {
        animes: [],
        loading: false
    };
    // async componentDidMount() {
    //     const response = await axios.get(
    //         'https://kitsu.io/api/edge/anime?filter[text]=naruto'
    //     );
    //     const {
    //         data: { data: animes }
    //     } = response;
    //     // console.log('animes',animes);
    //     this.setState({
    //         animes: animes
    //     });
    // }

    componentDidUpdate() {
        console.log('state: ', this.state);
    }

    searchAnimes = async text => {
        // console.log('console.log from app.js',text);
        const response = await axios.get(
            `https://kitsu.io/api/edge/anime?filter[text]=${text}`
        );
        const {
            data: { data: animes }
        } = response;
        // console.log('animes',animes);
        this.setState({
            animes: animes
        });
    };

    render() {
        const { animes, loading } = this.state;
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Search searchAnimes={this.searchAnimes} />
                    <AnimeList loading={loading} animes={animes} />
                </div>
            </div>
        );
    }
}

export default App;
