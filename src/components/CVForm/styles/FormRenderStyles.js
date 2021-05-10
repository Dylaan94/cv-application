import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  background: white;
  border-radius: 10px;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NameDiv = styled.div`
  font-size: 4em;
  padding: 0.3em;
`;

const ContactDiv = styled.div`
  font-size: 1em;
  p {
    font-weight: 900;
  }
`;

const PersonalDiv = styled.div``;

const FormRenderStyles = {
  Wrapper: Wrapper,
  HeaderDiv: HeaderDiv,
  NameDiv: NameDiv,
  ContactDiv: ContactDiv,
  PersonalDiv: PersonalDiv,
};

export default FormRenderStyles;
