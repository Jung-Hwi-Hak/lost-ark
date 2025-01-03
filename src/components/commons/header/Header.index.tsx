import * as S from '@components/commons/header/Header.styles';
import HeaderFirstLine from '@components/commons/header/ui/firstLine/HeaderFirstLine.index';

/**
 * @title 공통 헤더 컴포넌트
 *
 * @author 정휘학
 * @since 2024.12.18
 * */
function Header() {
	return (
		<S.Header>
			{/* 헤더 첫번째 라인 */}
			<HeaderFirstLine />
			{/* 헤더 두번째 라인 */}
			<S.headerSecond>
				<S.NavWrap>
					<S.Nav>
						<S.NavUl>
							<S.NavLi>길드</S.NavLi>
							<S.NavLi>랭킹</S.NavLi>
							<S.NavLi>도도</S.NavLi>
							<S.NavLi>라라</S.NavLi>
							<S.NavLi>라라</S.NavLi>
						</S.NavUl>
					</S.Nav>
				</S.NavWrap>
			</S.headerSecond>
		</S.Header>
	);
}

export default Header;
