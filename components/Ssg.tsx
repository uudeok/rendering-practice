import styles from '../styles/dog.module.css';
import { DogType } from './Csr';

export const getDogs = async () => {
    const data = await fetch('http://localhost:3000/todos');
    const result = await data.json();
    return result;
};

const Ssg = async () => {
    const dogs = await getDogs();

    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>강아지 리스트</h1>
            {dogs?.map((dog: DogType) => (
                <li key={dog.id} className={styles.item}>
                    <img src={dog.img} alt={dog.name} width={300} height={300} />
                    <span>{dog.name}</span>
                    <span>{dog.age}세</span>
                </li>
            ))}
        </div>
    );
};

export default Ssg;
