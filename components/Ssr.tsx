import { MovieType } from '@/app/utils/movie';
import styles from '../styles/movie.module.css';

export const getMovie = async () => {
    const data = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
    if (!data.ok) {
        throw Error('Error Fetched');
    }

    const result = await data.json();
    return result;
};

const Ssr = async () => {
    const movieData = await getMovie();
    console.log(movieData);

    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>Movie List</h1>
            <div className={styles.movie}>
                {movieData?.map((movie: MovieType) => (
                    <div key={movie.id}>
                        <img src={movie.poster_path} alt={movie.title} width={450} height={450} />
                        <div className={styles.subtitle}>{movie.title}</div>
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ssr;
