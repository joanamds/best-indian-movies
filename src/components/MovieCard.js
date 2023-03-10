import React from 'react'; 
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
    render(){
        const { movie: {title, poster, releaseYear, directedBy, sinopsis, runningTime, watchNow } } = this.props; 
        const altPoster = `Poster do filme ${ title }`;
        return(
            <div className="bg-white p-12 rounded-2xl shadow-lg mt-20 flex-wrap w-100">
                <p className="mb-10 text-center text-xl">
                    <strong>{title}</strong>
                </p>
                <div className="flex justify-center">
                    <img className="poster" src={poster} alt={altPoster} width="300"/>
                </div>
                <p className="mt-14">
                    <strong>Ano:</strong>  { releaseYear }
                </p>
                <p className="directed-by">
                    <strong>Direção:</strong> { directedBy }
                </p>
                <p className="text">
                    <strong>Sinopse:</strong> { sinopsis }
                </p>
                <p className="running-time">
                    <strong>Duração:</strong> { runningTime }
                </p>
                <div className="flex justify-around mt-10">
                    <a href={watchNow} target="_blank" rel="noopener noreferrer">
                        <button pointer className="rounded-full bg-black p-5 hover:bg-slate-800 focus:outline-none focus:ring focus:ring-slate-800">
                            <img src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.png" alt="logo justwatch" width="100"/>
                        </button>
                    </a>
                    </div>
            </div>
        );
    }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    releaseYear: PropTypes.string,
    directedBy: PropTypes.string,
    sinopsis: PropTypes.string,
    runningTime: PropTypes.string,
    available: PropTypes.shape({
      logoUrl: PropTypes.string,
      stream: PropTypes.string,
    }),
    watchNow: PropTypes.string,    
  }).isRequired,
};

export default MovieCard;