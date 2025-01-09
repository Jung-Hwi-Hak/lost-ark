/* eslint-disable no-unused-vars */

import * as S from '@components/inputs/inputA/InputA.styled';
import React, { useEffect, useRef, useState } from 'react';

interface InputAI {
	propInputS?: boolean;
	setPropInputS?: React.Dispatch<React.SetStateAction<boolean>>;
}

function InputA(props: InputAI) {
	const { propInputS, setPropInputS } = props;

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (propInputS) {
			inputRef.current.focus();
		}

		if (!propInputS) {
			inputRef.current.value = '';
			inputRef.current.blur();
		}
	}, [propInputS]);

	const handleFocusInput = () => {
		if (setPropInputS) setPropInputS(true);
	};

	const handleBlurInput = () => {
		if (setPropInputS) setPropInputS(false);
	};

	return (
		<S.Wrap>
			<S.Input
				ref={inputRef}
				maxLength={12}
				onFocus={handleFocusInput}
				onBlur={handleBlurInput}
				placeholder="캐릭터 검색"
			/>
			<S.ItemBox>
				<S.Label>
					<span>검색&nbsp;&nbsp;/</span>
				</S.Label>
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
	propInputS: null,
	setPropInputS: null,
};

export default InputA;
