/**
 * @title InputA 컴포넌트 기능 Hooks 모음
 *
 * @author 정휘학
 * @since 2025.01.13
 * */
import { useEffect, useRef, useState } from 'react';

export const InputAHooks = () => {
	/* 마우스클릭시 인풋 blur 처리에 빠질 영역 */
	const inputWrapRef = useRef<any>(null);

	/* 인풋 focus 상태 */
	const [focusSearchInputS, setFocusSearchInputS] = useState<boolean>(false);

	/* 현재 페이지에 특정키에 따른 인풋 focus 상태 변경 hook */
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === '/') {
			event.preventDefault();
			setFocusSearchInputS(true);
		}
		if (event.key === 'Escape') {
			event.preventDefault();
			setFocusSearchInputS(false);
		}
	};

	const handleClickOutside = (e) => {
		if (
			inputWrapRef.current &&
			!inputWrapRef.current.contains(e.target) &&
			inputWrapRef.current &&
			!inputWrapRef.current.contains(e.target)
		) {
			// input 요소가 아니면 blur 처리
			setFocusSearchInputS(false);
		}
	};

	/* 현재 페이지 keydown 이벤트 적용 */
	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	// /* ========== URL 변경될 시 캐릭터 검색 input blur ========== */
	// useEffect(() => {
	// 	setFocusSearchInputS(false);
	// }, [pathname]);

	return {
		focusSearchInputS,
		setFocusSearchInputS,
		handleKeyPress,
		inputWrapRef,
	};
};
