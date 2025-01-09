/* eslint-disable no-unused-vars */

import * as S from '@pages/main/MainPage.styled';
import InputA from '@components/inputs/inputA/InputA.index';
import { useEffect, useState } from 'react';
import { SearchBehind } from '@pages/main/MainPage.styled';

function MainPage() {
	const [focusSearchInputS, setFocusSearchInputS] = useState<boolean>(false);

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === '/') {
			event.preventDefault();
			setFocusSearchInputS(true);
			// 원하는 동작을 여기서 호출
		}
		if (event.key === 'Escape') {
			event.preventDefault();
			setFocusSearchInputS(false);
		}
	};
	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
	}, []);

	return (
		<S.Container>
			<S.SearchWrap>
				<InputA propInputS={focusSearchInputS} setPropInputS={setFocusSearchInputS} />
				<SearchBehind className={focusSearchInputS ? 'focus' : 'blur'}>
					<div className="history item">
						<span>히스토리</span>
						<ul>
							<li>
								<span>휘쪽</span>
								<span>1706.6</span>
							</li>
							<li>휘쪽</li>
							<li>휘쪽</li>
							<li>휘쪽</li>
						</ul>
					</div>
					<div className="favorites item">즐겨찾기</div>
				</SearchBehind>
			</S.SearchWrap>
		</S.Container>
	);
}

export default MainPage;
