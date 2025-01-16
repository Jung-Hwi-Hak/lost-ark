const theme = {
	// ${({theme}) => theme.fonts.컬러이름};
	fonts: {
		point: '#D0FDA0', // 모코코 색상 - 포인트 줄 때 사용
		white: '#F7F7F7', // 기본 텍스트
		gray: '#767c8d', // 비활성화
		gray100: '#989CA4', // 회색 글씨
	},

	// ${({theme}) => theme.background.컬러이름}
	background: {
		point: '#D0FDA0', // 모코코 색상 - 포인트 줄 때 사용
		default: '#101114', // html
		section: '#1C1D22', // 섹션
		deep: '#14151C', // 기본, 섹션 배경을 제외한 나머지 배경.
	},

	outline: {
		gray: '#31363F',
		gray100: '#989CA4',
	},
};

export default theme;
