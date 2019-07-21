import React from 'react'
import AnimeItem from './AnimeItem';
const AnimeList = ({animes, loading}) => {
    return (
        <div style={userStyle}>
            {animes.map(anime => (
                <AnimeItem key={anime.id} anime={anime}/>
            ))}
        </div>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
};

export default AnimeList
