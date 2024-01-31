import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    /*flex-basis with media queries*/
`;
const Logo = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 6px;
`;
const Text = styled.p`
    color: #777;
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 10px;
`;
export default function Skill (props){
    const {name, photo} = props
    return (
      <Container>
        <Logo src={photo} />
        <Text>{name}</Text>
      </Container>
    );
}