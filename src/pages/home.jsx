import { useQuery } from "@tanstack/react-query";
import { HomeTemplate } from "../components/templates/homeTemplate";
import { usePokemonStore } from "../store/pokemonStore";

export function Home() {
  const { mostrarPokemons, buscarPokemon, buscador } = usePokemonStore();

  useQuery({
    queryKey: ["mostrar pokemons"],
    queryFn: mostrarPokemons,
  });

  useQuery({
    queryKey: ["buscar pokemon", buscador],
    queryFn: () => buscarPokemon(buscador),
    enabled: false,
  });

  return <HomeTemplate />;
}
