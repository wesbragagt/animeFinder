import React from 'react';
import AnimeItem from './AnimeItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
const AnimeList = ({ animes, loading }) => {
    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div style={userStyle}>
                {animes.map(anime => (
                    <AnimeItem key={anime.id} anime={anime} />
                ))}
            </div>
        );
    }
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
};

AnimeList.propTypes = {
    animes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default AnimeList;
