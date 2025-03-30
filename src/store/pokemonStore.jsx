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
