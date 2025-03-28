const BASE_URL = "https://pokeapi.co/api/v2";


export const getPokemonList = async (limit: number = 20, offset: number = 0) => {
   try {
      const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
      if (!response.ok) throw new Error("Error fetching the Pokémon list");
      return await response.json();
   } catch (error) {
      console.error(error);
      return null;
   }
};


export const getPokemon = async (nameOrId: string | number) => {
   try {
      const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
      if (!response.ok) throw new Error("Error fetching Pokémon");
      return await response.json();
   } catch (error) {
      console.error(error);
      return null;
   }
}


export const getPokemonDetails = async (nameOrId: string | number) => {
   try {
      const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
      if (!response.ok) throw new Error("Error fetching Pokémon details");
      return await response.json();
   } catch (error) {
      console.error(error);
      return null;
   }
};


export const getPokemonTypes = async () => {
   try {
      const response = await fetch(`${BASE_URL}/type`);
      if (!response.ok) throw new Error("Error fetching Pokémon types");
      return await response.json();
   } catch (error) {
      console.error(error);
      return null;
   }
};


export const getPokemonByType = async (type: string) => {
   try {
      const response = await fetch(`${BASE_URL}/type/${type}`);
      if (!response.ok) throw new Error("Error fetching Pokémon by type");
      return await response.json();
   } catch (error) {
      console.error(error);
      return null;
   }
};
