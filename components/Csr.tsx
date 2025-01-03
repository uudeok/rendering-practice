'use client';

import styles from '../styles/dog.module.css';
import { useEffect, useState } from 'react';

export type DogType = {
    id: string;
    img: string;
    name: string;
    age: number;
};

const Csr = () => {
    const [datas, setDatas] = useState<DogType[]>();

    const getDogs = async () => {
        const data = await fetch('http://localhost:3000/todos');

        if (!data.ok) {
            throw Error('Fetched Error...');
        }

        const result = await data.json();
        setDatas(result);
    };

    useEffect(() => {
        getDogs();
    }, []);

    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>강아지 리스트</h1>
            {datas?.map((dog) => (
                <li key={dog.id} className={styles.item}>
                    <img src={dog.img} alt={dog.name} width={300} height={300} />
                    <span>{dog.name}</span>
                    <span>{dog.age}세</span>
                </li>
            ))}
        </div>
    );
};

export default Csr;
