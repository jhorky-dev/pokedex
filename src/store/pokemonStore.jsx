import { create } from "zustand";

export const usePokemonStore = create((set, get) => ({
  pokemons: [],
  mostrarPokemons: async () => {
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
    const response = await fetch(apiURL);
    const data = await response.json();
    set({ pokemons: data });
    return data;
  },
  buscador: "",
  setBuscador: (p) => set({ buscador: p }),
  pokemonBuscado: [],
  mostrarDetallesPokemon: async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const { typesColors } = get();
    let numer3decimales = data.id;
    if (numer3decimales < 10) {
      numer3decimales = "0" + numer3decimales;
    }
    if (numer3decimales < 100) {
      numer3decimales = "0" + numer3decimales;
    }
    /* const urlImageApi = "https://serebii.net/pokemongo/pokemon/"; */
    const urlImageApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
    const urlImage = `${urlImageApi}${numer3decimales}.png`;
    return {
      numero: numer3decimales,
      tipo: data.types[0].type.name,
      imageUrl: urlImage,
      color: typesColors[data.types[0].type.name],
      /* nombre: data.name,
      altura: data.stats[0].base_stat,
      peso: data.stats[1].base_stat,
      estatura: data.stats[2].base_stat,
      raza: data.species.name,
      generacion: data.species.generation.name,
      color: data.color.name, */
      id: data.id,
      animacion:
        data.sprites?.versions?.["generation-v"]?.["black-white"]?.animated
          ?.front_default,
    };
  },
  typesColors: {
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    bug: "#A8B820",
    normal: "#A8A878",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    fairy: "#EE99AC",
    fighting: "#C03028",
    psychic: "#F85888",
    rock: "#B8A038",
    ghost: "#705898",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    flying: "#A890F0",
  },
  buscarPokemon: async (buscador) => {
    const { mostrarDetallesPokemon } = get();
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${buscador.toLowerCase()}`;
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error("No se encontró el Pokemon");
      }
      const data = await response.json();
      const details = await mostrarDetallesPokemon(apiURL);
      set({ pokemonBuscado: { ...data, ...details } });
      return { ...data, ...details };
    } catch (error) {
      set({ pokemonBuscado: null });
    }
  },
}));
