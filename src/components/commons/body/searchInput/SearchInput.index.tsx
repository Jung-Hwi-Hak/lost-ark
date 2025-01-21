/**
 * @title 캐릭터 검색 컴포넌트
 *
 * @author 정휘학
 * @since 2025.01.21
 * */
import InputA from '@components/inputs/inputA/InputA.index';
import * as S from '@components/commons/body/Body.styles';
import { InputAHooks } from '@components/inputs/inputA/InputAHooks';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';

function SearchInput() {
	const inputAHooks = InputAHooks();
	const navigate = useNavigate();

	/* ========== 캐릭터 검색 hook ========== */
	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		inputAHooks.setFocusSearchInputS(false);
		navigate(`/character/${e.target[0].value}`);
	};

	return (
		<S.SearchContainer ref={inputAHooks.inputWrapRef}>
			<InputA
				handleSearch={handleSearch}
				focusInputS={inputAHooks.focusSearchInputS}
				setFocusInputS={inputAHooks.setFocusSearchInputS}
				placeholder="캐릭터 검색"
				label={inputAHooks.focusSearchInputS ? 'ESC 닫기' : '/ 검색'}
			/>
			<S.SearchBehind className={inputAHooks.focusSearchInputS ? 'focus box_shadow' : 'blur'}>
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
	);
}

export default SearchInput;
