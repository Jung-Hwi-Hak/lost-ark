import { JSX } from 'react';
import * as S from '@components/commons/body/Body.styles';
import SearchInput from '@components/commons/body/searchInput/SearchInput.index';

interface BodyI {
	children: JSX.Element;
}

function Body({ children }: BodyI) {
	return (
		<S.Body>
			<S.Container>
				{/* 캐릭터 검색 섹션 */}
				<S.SearchWrap>
					<SearchInput />
				</S.SearchWrap>
				{/* 컨텐츠 */}
				{children}
			</S.Container>
		</S.Body>
	);
}

export default Body;
