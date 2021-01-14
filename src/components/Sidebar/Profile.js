import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5rem;
`;

const ProfilePic = styled.img`
  height: 5rem;
`;

const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

const Profile = () => {
  return (
    <Container>
      <ProfilePic
        src={
          'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png'
        }
      />
      <ProfileName>John Doe</ProfileName>
    </Container>
  );
};

export default Profile;
