import openApiInstance from '@apis/lib/openApiAxios';

interface GetCharacterSiblingsI {
	searchUserNm: string;
}

/**
 * @title 검색한 캐릭터를 가진 계정의 모든 캐릭터 정보 가져오는 query api
 *
 * @param [searchUserNm] - 검색하려는 캐릭터 이름
 *
 * @author 정휘학
 * @since 2024.12.26
 * */
export const getCharacterSiblings = async ({ searchUserNm }: GetCharacterSiblingsI) => {
	const { data } = await openApiInstance.get(`/characters/${searchUserNm}/siblings`);
	return data;
};
