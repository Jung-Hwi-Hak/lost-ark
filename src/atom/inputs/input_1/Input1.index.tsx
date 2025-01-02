import * as S from './index.styles';
import { Input1I } from './index.types';

/**
 * @title Input_1 Atom
 *
 * @used [ MainPage, ]
 * @author 정휘학
 * @since 2024.12.30
 * */
function Input1(props: Input1I) {
	const { text } = props;

	return <S.Input type="text" placeholder={text} />;
}

export default Input1;
