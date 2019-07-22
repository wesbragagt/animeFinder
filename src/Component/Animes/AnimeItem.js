import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
const AnimeItem = ({ anime: { id,attributes } }) => {
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
                <Link to={`/anime/${attributes.slug}/${id}`} className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );
};

AnimeItem.propTypes = {
    anime: PropTypes.object.isRequired
};

export default AnimeItem;
