import * as S from '@molecule/labelInput/LabelInput.styled';

import Input1Index from '../../atom/inputs/input_1/Input1.index';
import Label1 from '../../atom/labels/label_1/Label1.index';

/**
 * @title label + input molecule
 *
 * @author 정휘학
 * @since 2024.12.30
 * */

function LabelInput() {
	return (
		<S.Wrap>
			<Input1Index text="캐릭터검색" />
			<Label1 />
		</S.Wrap>
	);
}

export default LabelInput;
