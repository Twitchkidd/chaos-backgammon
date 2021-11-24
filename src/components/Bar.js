import styled from 'styled-components';
import Checker from './Checker';

const Bar = styled.li`
	&::before {
		content: 'Bar: ';
	}
`;

export default ({ checkers }) => {
	return (
		<Bar>
			{checkers.map((ch, i) => (
				<Checker ch={ch} key={i} />
			))}
		</Bar>
	);
};
