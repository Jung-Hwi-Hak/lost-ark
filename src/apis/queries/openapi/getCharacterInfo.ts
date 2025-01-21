import openApiInstance from '@apis/lib/openApiAxios';

/**
 * @title 검색한 캐릭터를 가진 계정의 모든 캐릭터 간단한 정보 가져오는 query api
 *
 * @param [characterNm] - 검색 캐릭터 이름
 *
 * @author 정휘학
 * @since 2024.12.26
 * */
interface GetCharacterSiblingsI {
	characterNm: string;
}

export const getCharacterSiblings = async ({ characterNm }: GetCharacterSiblingsI) => {
	const { data } = await openApiInstance.get(`/characters/${characterNm}/siblings`);
	return data;
};

/**
 * @title 검색한 캐릭터를 가진 계정의 모든 캐릭터 디테일 정보 가져오는 query api
 *
 * @para [characterNm] - 검색 캐릭터 이름
 *
 * @author 정휘학
 * @since 2025.01.21
 * */

interface GetCharacterDetailI {
	characterNm: string;
}
export const getCharacterDetail = async ({ characterNm }: GetCharacterDetailI) => {
	const { data } = await openApiInstance.get(`armories/characters/${characterNm}`);

	return data;
};
