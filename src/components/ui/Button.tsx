import styled from 'styled-components';

interface Button1Props {
    children?: React.ReactNode;
  }
  
  
  

const Button = styled.button`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 4px;
  color: var(--color-secondary);
  background-color: var(--color-primary);

    &:hover{
        background-color: var(--color-accent);
    }
`;

const Button1: React.FC<Button1Props> = ({ children }) => {
    return <Button>{children}</Button>;
  };

export default Button1;