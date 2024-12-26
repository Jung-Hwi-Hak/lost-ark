import openApiInstance from '@apis/lib/openApiAxios';

interface GetCharacterSiblingsI {
	searchUserNm: string;
}

export const getCharacterSiblings = async ({ searchUserNm }: GetCharacterSiblingsI) => {
	const { data } = await openApiInstance.get(`/characters/${searchUserNm}/siblings`);
	return data;
};
