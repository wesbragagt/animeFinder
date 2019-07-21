import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Nav/Navbar';
import AnimeList from './Component/Animes/AnimeList';
import Search from './Component/Animes/Search';
import Alert from './Component/Alert';
import axios from 'axios';
class App extends Component {
    state = {
        animes: [],
        loading: false,
        alert: null
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
        this.setState({ loading: true });
        const response = await axios.get(
            `https://kitsu.io/api/edge/anime?filter[text]=${text}`
        );
        const {
            data: { data: animes }
        } = response;
        // console.log('animes',animes);
        this.setState({
            animes: animes,
            loading: false
        });
    };

    clearAnimes = () => {
        this.setState({
            animes: [],
            loading: false
        });
    };

    setAlert = (msg, type) => {
        this.setState({
            alert: { msg, type }
        });
        setTimeout(() => {
            this.setState({
                alert: null
            });
        }, 3000);
    };

    render() {
        const { animes, loading } = this.state;
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Alert alert={this.state.alert} />
                    <Search
                        searchAnimes={this.searchAnimes}
                        showClear={animes.length > 0 ? true : false}
                        clearAnimes={this.clearAnimes}
                        setAlert={this.setAlert}
                    />
                    <AnimeList loading={loading} animes={animes} />
                </div>
            </div>
        );
    }
}

export default App;
