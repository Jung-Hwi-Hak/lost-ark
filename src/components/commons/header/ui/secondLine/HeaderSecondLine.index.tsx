import * as S from '@components/commons/header/ui/secondLine/HeaderSecondLine.styles';

/**
 * @title 헤더 두번째 컴포넌트
 *
 * @author 정휘학
 * @since 2024.01.09
 * */

function HeaderSecondLine() {
	return (
		<S.Wrap>
			<S.Nav>
				<S.MenuUl>
					<S.MenuLi>메인</S.MenuLi>
					<S.MenuLi>레이드</S.MenuLi>
					<S.MenuLi>골드체크</S.MenuLi>
				</S.MenuUl>
			</S.Nav>
		</S.Wrap>
	);
}

export default HeaderSecondLine;
