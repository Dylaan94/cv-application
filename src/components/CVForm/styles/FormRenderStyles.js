import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  align-items: center;
  background: white;
  border-radius: 10px;
  font-size: 1em;
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

const PersonalDiv = styled.div`
  width: 60vw;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.6em;
  p {
    font-weight: 700;
    padding: 0.6em;
    font-size: 1.5em;
  }
`;

const EduDiv = styled.div``;

const EduTitleDiv = styled.div``;

const EduDataDiv = styled.div``;

const EduTimeDiv = styled.div``;

const EduInfoDiv = styled.div``;

const FormRenderStyles = {
  Wrapper: Wrapper,
  HeaderDiv: HeaderDiv,
  NameDiv: NameDiv,
  ContactDiv: ContactDiv,
  PersonalDiv: PersonalDiv,
  EduDiv: EduDiv,
  EduTitleDiv: EduTitleDiv,
  EduDataDiv: EduDataDiv,
  EduTimeDiv: EduTimeDiv,
  EduInfoDiv: EduInfoDiv,
};

export default FormRenderStyles;
