'use client';

import styles from '../styles/movie.module.css';
import { useEffect, useState } from 'react';
import { MovieType } from '@/app/utils/movie';

const Csr = () => {
    const [data, setData] = useState<MovieType[]>();

    const getPost = async () => {
        const data = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        if (!data.ok) {
            throw Error('Error Fetched');
        }

        const result = await data.json();
        setData(result);
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>Movie List</h1>
            <div className={styles.movie}>
                {data?.map((movie) => (
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

export default Csr;
