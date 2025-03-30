import { create } from "zustand";

export const usePokemonStore = create((set) => ({
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
  mostrarDetallesPokemon: async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    return {
      tipo: data.types[0].type.name,
      imagen: data.sprites.front_default,
      nombre: data.name,
      altura: data.stats[0].base_stat,
      peso: data.stats[1].base_stat,
      estatura: data.stats[2].base_stat,
      raza: data.species.name,
      generacion: data.species.generation.name,
      color: data.color.name,
      id: data.id,
    }
  },
  buscarPokemon: async (buscador) => {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${buscador.toLowerCase()}`;
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error("No se encontró el Pokemon");
      }
      const data = await response.json();
      set({ pokemonBuscado: data });
      return data;
    } catch (error) {
      set({ pokemonBuscado: null });
    }
  },
}));
