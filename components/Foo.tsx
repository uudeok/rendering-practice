'use client';

import { useDogStore } from '@/store/dogStore';

const Foo = () => {
    const { selectedDog } = useDogStore();

    console.log(selectedDog);

    return (
        <div>
            <div>selectedDog</div>
            <div>name : {selectedDog?.name}</div>
        </div>
    );
};

export default Foo;
