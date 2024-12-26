import { JSX } from 'react';
import * as S from '@components/commons/body/Body.styles';

interface BodyI {
	children: JSX.Element;
}

function Body({ children }: BodyI) {
	return <S.BodyWrap>{children}</S.BodyWrap>;
}

export default Body;
