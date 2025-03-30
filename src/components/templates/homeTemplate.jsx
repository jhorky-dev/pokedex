import styled from "styled-components";
import { Header } from "../organismos/header";
import { CardPokemon } from "../moleculas/cardPokemon";
import { useIsFetching } from "@tanstack/react-query";
import { CardPokemonBuscador } from "../moleculas/cardPokemonBuscador";

export function HomeTemplate() {
  const isFetching = useIsFetching({
    queryKey: ["buscar pokemon"],
  });
  return (
    <Container>
      <Header />
      <CardPokemonBuscador />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
