import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colorGreen};
  width: 50px;
  height 50px;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 5rem;
  border: none;
  position: absolute;
  top: 6rem;
  right: 6rem;
`;

const AddButton = () => {
  return <Button>+</Button>;
};

export default AddButton;
