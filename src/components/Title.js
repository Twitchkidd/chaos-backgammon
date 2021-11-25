import styled from 'styled-components';

const Title = styled.h1`
	font-size: ${props => (props.splash ? '8em' : '4em')};
`;

export default ({ splash }) => <Title splash={splash}>Chaos Backgammon!</Title>;
