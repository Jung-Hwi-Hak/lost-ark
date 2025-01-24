/**
 * @title [ 2025-01-08T22:30:00 ] 형식인 날짜 데이터가
 * 				오전 06:00 ~ 다음날 새벽 05:59 시간에 속하면 true 속하지 않으면 false 를
 * 				반환하는 유틸 함수
 *
 * @author 정휘학
 * @since 2025.01.14
 * */

export const isTodayA = (dateString: string) => {
	const targetDate = new Date(dateString); // 주어진 시간 문자열을 Date 객체로 변환
	const today = new Date(); // 현재 날짜와 시간을 가져옴

	// 오늘 오전 6시를 기준으로 오늘 시작 시간을 설정
	const startOfToday = new Date(today);
	startOfToday.setHours(6, 0, 0, 0); // 오늘 06:00:00

	// 오늘의 종료 시간 (다음날 오전 5시 59분 59초)
	const endOfToday = new Date(startOfToday);
	endOfToday.setDate(startOfToday.getDate() + 1); // 하루를 더하여 내일 오전 6시
	endOfToday.setSeconds(endOfToday.getSeconds() - 1); // 내일 오전 6시에서 1초를 뺀 시간 (5:59:59)

	// 주어진 시간이 오늘 범위 내에 있는지 확인
	return targetDate >= startOfToday && targetDate <= endOfToday;
};

/**
 * @title 모험 섬 am 시간인지 파악하는 유틸 함수
 *
 * @author 정휘학
 * @since 2025.01.16
 * */

export const checkIslandAmTime = (dateString: string) => {
	const targetDate = new Date(dateString); // 주어진 시간 문자열을 Date 객체로 변환
	const today = new Date(); // 현재 날짜와 시간을 가져옴

	// 오늘의 시작 시간 (오전 0시 00분 00초)
	const startOfToday = new Date(today);
	startOfToday.setHours(0, 0, 0, 0);

	// 오늘 오전 9시, 11시, 13시의 날짜 객체 생성
	const target9AM = new Date(startOfToday);
	target9AM.setHours(9, 0, 0, 0); // 오늘 오전 9시

	const target11AM = new Date(startOfToday);
	target11AM.setHours(11, 0, 0, 0); // 오늘 오전 11시

	const target1PM = new Date(startOfToday);
	target1PM.setHours(13, 0, 0, 0); // 오늘 오후 1시 (13시)

	return (
		targetDate.getTime() === target9AM.getTime() ||
		targetDate.getTime() === target11AM.getTime() ||
		targetDate.getTime() === target1PM.getTime()
	);
};
