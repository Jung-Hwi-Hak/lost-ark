import { create } from 'zustand/react';

type StudyType = {
	memo: string;
	setMemo: (arg0: string) => void;
};

export const useStudyStore = create<StudyType>()((setState) => ({
	memo: '',
	setMemo: (memo: string) => {
		setState(() => ({
			memo: memo,
		}));
	},
}));
