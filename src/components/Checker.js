import styled from 'styled-components';

export default styled.div`
	&::after {
		content: ${props => props.color};
	}
`;
