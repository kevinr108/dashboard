import styled from 'styled-components';
import MenuItem from './MenuItem';

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Menu = () => {
  return (
    <Container>
      <MenuItem title='Home' icon='active' active='active' />
      <MenuItem title='Deposits' icon='' />
      <MenuItem title='Offers' icon='' />
      <MenuItem title='Payments' icon='' />
      <MenuItem title='Settings' icon='' />
    </Container>
  );
};

export default Menu;
