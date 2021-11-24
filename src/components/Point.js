import styled from 'styled-components';

export default styled.div`
	&::before {
		content: ${props => props.number};
	}
`;
