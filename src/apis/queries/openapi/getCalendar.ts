/**
 * @title 게임 컨텐츠 query api ( 필보&카게 , 모험 섬 )
 *
 * @author 정휘학
 * @since 2025.01.14
 * */
import openApiInstance from '@apis/lib/openApiAxios';

type Items = {
	Icon: string;
	Name: string;
	StartTimes: string[];
};

type RewardItems = {
	Items: Items[];
};

interface EventData {
	CategoryName: string; // 카테고리 이름
	ContentsName: string; // 내용 이름
	ContentsIcon: string; // 내용 아이콘 URL
	StartTimes: string[]; // 시작 시간 목록
	RewardItems: RewardItems[];
}

type GetCalendarType = EventData[]; // 전체 데이터 목록의 타입

export const getCalendar = async (): Promise<GetCalendarType> => {
	const { data } = await openApiInstance.get(`/gamecontents/calendar`);
	return data;
};
