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
  padding-bottom: 0.6em;
  p {
    font-weight: 700;
    padding: 0.6em;
    font-size: 1.5em;
  }
`;

const EduDiv = styled.div`
  width: 50vw;
`;

const EduTitleDiv = styled.div`
  text-align: left;
  font-size: 1.5em;
  font-weight: 700;
`;

const EduDataDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
`;

const EduTimeDiv = styled.div`
  text-align: left;
`;

const EduInfoDiv = styled.div`
  margin-left: 30%;
  text-align: left;
`;

const EmployDiv = styled.div`
  width: 50vw;
`;

const EmployTitleDiv = styled.div`
  text-align: left;
  font-size: 1.5em;
  font-weight: 700;
`;

const EmployDataDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
`;

const EmployTimeDiv = styled.div`
  text-align: left;
`;

const EmployInfoDiv = styled.div`
  margin-left: 30%;
  text-align: left;
`;

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
  EmployDiv: EmployDiv,
  EmployTitleDiv: EmployTitleDiv,
  EmployDataDiv: EmployDataDiv,
  EmployTimeDiv: EmployTimeDiv,
  EmployInfoDiv: EmployInfoDiv,
};

export default FormRenderStyles;
