import styled from "styled-components";
import { Header } from "../organismos/header";

export function HomeTemplate() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
