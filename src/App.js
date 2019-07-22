import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Nav/Navbar';
import AnimeList from './Component/Animes/AnimeList';
import AnimeInfo from './Component/Animes/AnimeInfo';
import Search from './Component/Animes/Search';
import Alert from './Component/Alert';
import About from './Component/pages/About';
import axios from 'axios';
class App extends Component {
    state = {
        animes: [],
        anime: {},
        loading: false,
        alert: null
    };

    // componentDidUpdate() {
    //     console.log('state: ', this.state);
    // }

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

    getAnime = async id => {
        this.setState({ loading: true });
        const response = await axios.get(
            `https://kitsu.io/api/edge/anime/${id}`
        );

        const {data: {data: anime}} = response;

        this.setState({
            anime: anime.attributes,
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
        const { animes, anime, loading } = this.state;
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Alert alert={this.state.alert} />

                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={props => (
                                    <Fragment>
                                        <Search
                                            searchAnimes={this.searchAnimes}
                                            showClear={
                                                animes.length > 0 ? true : false
                                            }
                                            clearAnimes={this.clearAnimes}
                                            setAlert={this.setAlert}
                                        />
                                        <AnimeList
                                            loading={loading}
                                            animes={animes}
                                        />
                                    </Fragment>
                                )}
                            />
                            <Route exact path="/about" component={About} />
                            <Route
                                exact
                                path="/anime/:title/:id"
                                render={props => (
                                    <AnimeInfo
                                        {...props} 
                                        getAnime={this.getAnime}
                                        anime={anime}
                                        loading={loading}
                                    />
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
