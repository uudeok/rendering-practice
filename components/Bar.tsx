'use client';

import { useDogStore } from '@/store/dogStore';

const Bar = () => {
    const { selectedDog } = useDogStore();
    console.log(selectedDog);

    return (
        <div>
            <div>bar</div>
            <div> selectedDog : </div>
            <div> {selectedDog?.name}</div>
        </div>
    );
};

export default Bar;
