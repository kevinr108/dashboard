import Nav from './Nav';
import styled from 'styled-components';
import AddButton from '../AddButton';
import SortingBar from '../SortingBar';

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const Main = () => {
  return (
    <Container>
      <Nav />
      <AddButton />
      <SortingBar />
    </Container>
  );
};

export default Main;
