import styled from 'styled-components';

// use as profilepic for now: https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;

const ProfilePic = styled.img`
  height: 3rem;
  border: solid grey 1px;
  border-radius: 5rem;
  padding: 0.2rem;
  cursor: pointer;
`;

const Nav = () => {
  return (
    <Container>
      <ProfilePic
        src={
          'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png'
        }
      />
    </Container>
  );
};

export default Nav;
