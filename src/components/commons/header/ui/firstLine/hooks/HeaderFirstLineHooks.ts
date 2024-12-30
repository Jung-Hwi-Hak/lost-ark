/**
 * @title 헤더 첫번째 라인 HOOK
 *
 * @author 정휘학
 * @since 2024.12.26
 * */
import { useNavigate } from 'react-router-dom';

export const HeaderFirstLineHooks = () => {
	const navigate = useNavigate();

	/* 로고 클릭 핸들러 */
	const onHandleClickLogo = () => {
		navigate('/');
	};

	return {
		onHandleClickLogo,
	};
};
