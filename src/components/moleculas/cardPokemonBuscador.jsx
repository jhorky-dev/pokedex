import styled from "styled-components";
import { usePokemonStore } from "../../store/pokemonStore";
import { Icon } from "@iconify/react/dist/iconify.js";
export function CardPokemonBuscador({ item, color = "#1ca533" }) {
  const { pokemonBuscado } = usePokemonStore();
  if (
    pokemonBuscado === null ||
    (Array.isArray(pokemonBuscado) && pokemonBuscado.length === 0)
  )
    return <Icon icon="fluent-emoji:avocado" />;
  return (
    <Container color={color}>
      <Number color={color}>#001</Number>
      <ImageWrapper>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
          }
        />
      </ImageWrapper>
      <Name>Nombre</Name>
      <SmallImage
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
        }
      />
    </Container>
  );
}
const Container = styled.div`
  background-color: #192438;
  border-radius: 10px;
  width: 200px;
  padding: 20px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: ${(props) => props.color};
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    filter: blur(70px);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: ${(props) => props.color};
    right: 0;
    top: 0px;
    left: 0px;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    filter: invert(10px);
  }
`;
const Number = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  color: ${(props) => props.color};
  font-weight: 700;
`;
const ImageWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  img {
    z-index: 10;
    width: 100%;
  }
`;

const Name = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const SmallImage = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
`;
