import { JSX } from 'react';
import * as S from '@components/commons/body/Body.styles';
import InputA from '@components/inputs/inputA/InputA.index';
import { InputAHooks } from '@components/inputs/inputA/InputAHooks';
import { useNavigate } from 'react-router-dom';

interface BodyI {
	children: JSX.Element;
}

function Body({ children }: BodyI) {
	const inputAHooks = InputAHooks();
	const navigate = useNavigate();
	return (
		<S.Body>
			<S.Container>
				{/* 캐릭터 검색 섹션 */}
				<S.SearchWrap>
					<S.SearchContainer ref={inputAHooks.inputWrapRef}>
						<InputA
							focusInputS={inputAHooks.focusSearchInputS}
							setFocusInputS={inputAHooks.setFocusSearchInputS}
							placeholder="캐릭터 검색"
							label={inputAHooks.focusSearchInputS ? 'ESC 닫기' : '/ 검색'}
						/>
						<S.SearchBehind className={inputAHooks.focusSearchInputS ? 'focus' : 'blur'}>
							<div className="history item">
								<span>히스토리</span>
								<ul>
									<li>
										<span>휘쪽</span>
										<span>1706.6</span>
									</li>
									<li>
										<span
											role="button"
											tabIndex={-1}
											onClick={() => {
												navigate('/444');
											}}
											onKeyPress={() => {}}
										>
											dd
										</span>
									</li>
									<li>휘쪽</li>
									<li>휘쪽</li>
								</ul>
							</div>
							<div className="favorites item">즐겨찾기</div>
						</S.SearchBehind>
					</S.SearchContainer>
				</S.SearchWrap>
				{/* 컨텐츠 */}
				{children}
			</S.Container>
		</S.Body>
	);
}

export default Body;
