import * as S from '@components/commons/header/Header.styles';
import HeaderFirstLine from '@components/commons/header/ui/firstLine/HeaderFirstLine.index';
import HeaderTBA from '@components/commons/header/ui/tba/HeaderTBA.index';
import HeaderSecondLine from '@components/commons/header/ui/secondLine/HeaderSecondLine.index';

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
				<hr />
				{/* 헤더 두번째 라인 */}
				<HeaderSecondLine />
				<HeaderTBA />
			</S.Container>
		</S.Header>
	);
}

export default Header;
