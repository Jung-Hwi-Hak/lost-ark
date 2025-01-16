/* eslint-disable no-unused-vars */

import * as S from '@components/inputs/inputA/InputA.styled';
import React, { useEffect, useRef } from 'react';

interface InputAI {
	focusInputS?: boolean; // input focus 상태 state
	setFocusInputS?: React.Dispatch<React.SetStateAction<boolean>>;
	placeholder?: string;
	label?: string;
}

/**
 * @title 인풋 A - focus , blur 기능 및 라벨 있음
 *
 * @author 정휘학
 * @since 2025.01.09
 * */
function InputA(props: InputAI) {
	const { focusInputS, setFocusInputS, label, placeholder } = props;

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (focusInputS) {
			inputRef.current.focus();
		}

		if (!focusInputS) {
			inputRef.current.value = '';
			inputRef.current.blur();
		}
	}, [focusInputS]);

	const handleFocusInput = () => {
		if (setFocusInputS) setFocusInputS(true);
	};

	// const handleBlurInput = () => {
	// 	if (setFocusInputS) setFocusInputS(false);
	// };

	return (
		<S.Wrap>
			<S.Input
				ref={inputRef}
				maxLength={12}
				onFocus={handleFocusInput}
				// onBlur={handleBlurInput}
				placeholder={placeholder}
			/>
			<S.ItemBox>
				{label ? (
					<S.Label>
						<span>{label}</span>
					</S.Label>
				) : null}
				<S.SVG>
					<path
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
				</S.SVG>
			</S.ItemBox>
		</S.Wrap>
	);
}

InputA.defaultProps = {
	focusInputS: null,
	setFocusInputS: null,
	placeholder: '',
	label: '',
};

export default InputA;
