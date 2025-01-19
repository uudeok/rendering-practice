import { DogType } from '@/components/Csr';
import { create } from 'zustand';

interface DogState {
    selectedDog: DogType | null;
    addDog: (selected: DogType) => void;
}

export const useDogStore = create<DogState>((set) => ({
    selectedDog: null,
    addDog: (dog) =>
        set(() => ({
            selectedDog: dog,
        })),
}));
