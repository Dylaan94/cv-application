import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

const FormDiv = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
`;

const MainStyles = {
  RootDiv: RootDiv,
  FormDiv: FormDiv,
  ContactInfo: ContactInfo,
};

export default MainStyles;
