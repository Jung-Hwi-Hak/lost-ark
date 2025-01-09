import * as S from '@components/commons/header/ui/tba/HeaderTBA.styled';

/**
 * @title 헤더 안내 컴포넌트
 *
 * @author 정휘학
 * @since 2024.01.09
 * */
function HeaderTBA() {
	return (
		<>
			<S.Wrap />
			<S.TbaBox>
				<S.TbaPoint>
					<span>알림</span>
				</S.TbaPoint>
				<span>로스트아크 open api 를 이용한 포토폴리오 사이트입니다.</span>
			</S.TbaBox>
		</>
	);
}

export default HeaderTBA;
