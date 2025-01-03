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
			<S.Container>
				{/* 헤더 첫번째 라인 */}
				<HeaderFirstLine />
				<hr style={{ width: '100%', position: 'absolute', right: '0' }} />
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
			</S.Container>
		</S.Header>
	);
}

export default Header;
