import React from 'react';

const AnimeItem = ({ anime: { attributes } }) => {
    return (
        <div className="card text-center">
            <img
                src={attributes.posterImage.small}
                alt="poster img"
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{attributes.titles.en_jp}</h3>
            <div>
                <a href='/' className="btn btn-dark btn-sm my-1">
                    More
                </a>
            </div>
        </div>
    );
};

export default AnimeItem;
