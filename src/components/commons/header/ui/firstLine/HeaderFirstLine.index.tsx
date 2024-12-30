import * as S from '@components/commons/header/ui/firstLine/HeaderFirstLine.styles';
import { HeaderFirstLineHooks } from '@components/commons/header/ui/firstLine/hooks/HeaderFirstLineHooks';

/**
 * @title 헤더 첫번째 라인 - 로고 및 꾸밈 또는 안내?? 정도 할 예정
 *
 * @author 정휘학
 * @since 2024.12.18
 * */

function HeaderFirstLine() {
	const { onHandleClickLogo } = HeaderFirstLineHooks();
	return (
		<S.Wrap>
			{/* 로고 이미지 */}
			<S.LogoImg onClick={onHandleClickLogo} />
			{/* 로고 폴더 gif */}
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style={{ color: '#FFF' }}>
				<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
					<path
						strokeDasharray="64"
						strokeDashoffset="64"
						d="M12 7h8c0.55 0 1 0.45 1 1v10c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11Z"
					>
						<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
					</path>
					<path d="M12 7h-9v0c0 0 0.45 0 1 0h6z" opacity="0">
						<animate
							fill="freeze"
							attributeName="d"
							begin="0.6s"
							dur="0.2s"
							values="M12 7h-9v0c0 0 0.45 0 1 0h6z;M12 7h-9v-1c0 -0.55 0.45 -1 1 -1h6z"
						/>
						<set fill="freeze" attributeName="opacity" begin="0.6s" to="1" />
					</path>
					<path strokeDasharray="2" strokeDashoffset="2" d="M15 9v0.01M17 11v0.01">
						<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0" />
					</path>
					<path strokeDasharray="2" strokeDashoffset="2" d="M15 13v0.01M17 15v0.01">
						<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0" />
					</path>
					<path strokeDasharray="2" strokeDashoffset="2" d="M15 17v0.01">
						<animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="2;0" />
					</path>
				</g>
			</svg>
			{/* 모코코 이미지 gif */}
			<S.MokokoImg />
		</S.Wrap>
	);
}

export default HeaderFirstLine;
