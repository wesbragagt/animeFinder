import React, { Component, Fragment } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
class AnimeInfo extends Component {
    
    componentDidMount() {
        this.props.getAnime(this.props.match.params.id);
    }


    render() {
        console.log(this.props.anime);
        const { loading } = this.props;

        if (loading) return <Spinner />;
        
        return (
            <div>
                <ul>
                    <li>{this.props.anime.canonicalTitle}</li>
                    <li>Rating: {this.props.anime.averageRating}</li>
                    <li>{this.props.anime.synopsis}</li>
                </ul>
            </div>
        );
    }
}

export default AnimeInfo;
