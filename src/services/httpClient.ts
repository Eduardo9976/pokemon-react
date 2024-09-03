import {Pokemon} from "../components/SectionSearchResult/types.ts";

const BASE_URL = 'https://pokeapi.co/api/v2'

const defaultHeaders = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

type User = {
    id?: string | number
    name: string
    avatar: string
}

const apiClient = {
    async getByName(name: string): Promise<Pokemon> {
        const response = await fetch(`${BASE_URL}/pokemon/${name}`, defaultHeaders)
        return response.json()
    },

    async getSpecies(id: number): Promise<Response> {
        const response = await fetch(`${BASE_URL}/pokemon-species/${id}`, defaultHeaders)
        return response.json()
    },

    async getEvolutionChain(id: number): Promise<Response> {
        const response = await fetch(`${BASE_URL}/evolution-chain/${id}`, defaultHeaders)
        return response.json()
    },

    async getAbility(id: number): Promise<Response> {
        const response = await fetch(`${BASE_URL}/ability/${id}`, defaultHeaders)
        return response.json()
    },

    async getPokemonsByTypes(type: string): Promise<Response> {
        const response = await fetch(`${BASE_URL}/type/${type}`, defaultHeaders)
        return response.json()
    },

    async getPokemonsByColors(color: string): Promise<Response> {
        const response = await fetch(`${BASE_URL}/pokemon-color/${color}`, defaultHeaders)
        return response.json()
    },

    async getPokemonsByEggGroup(group: string): Promise<Response> {
        const response = await fetch(`${BASE_URL}/egg-group/${group}`, defaultHeaders)
        return response.json()
    },

    async getPokemonsByLocale(locale: string): Promise<Response> {
        const response = await fetch(`${BASE_URL}/pokemon-habitat/${locale}`, defaultHeaders)
        return response.json()
    },
    //
    // async getUsers(): Promise<User[]> {
    //     const response = await fetch('https://66c67221134eb8f43497a070.mockapi.io/users', defaultHeaders)
    //
    //     return response.json()
    // },

    async getUsers(): Promise<User[]> {
        /* eslint-disable */
        const response = await fetch('https://66c67221134eb8f43497a070.mockapi.io/users', defaultHeaders);

        if (!response.body) {
            throw new Error('ReadableStream não suportada!');
        }

        const reader = response.body.getReader();
        const contentLength = response.headers.get('Content-Length') || 0;

        let receivedLength = 0; // Quantidade de bytes recebidos
        let chunks = []; // Armazenamento dos pedaços de dados

        while (true) {
            const {done, value} = await reader.read();
            if (done) break; // Download completo

            chunks.push(value); // Armazena o pedaço recebido
            receivedLength += value.length; // Atualiza o progresso

            // Calcula a porcentagem do progresso
            if (contentLength) {
                const percentage = Math.floor((receivedLength / +contentLength) * 100);
                console.log(`Progresso do download: ${percentage}%`);
            } else {
                console.log(`Baixados: ${receivedLength} bytes (tamanho total desconhecido)`);
            }
        }

        // Converte os pedaços em uma única string JSON
        const chunksAll = new Uint8Array(receivedLength);
        let position = 0;
        for (let chunk of chunks) {
            chunksAll.set(chunk, position);
            position += chunk.length;
        }

        const resultString = new TextDecoder("utf-8").decode(chunksAll);
        const resultJSON = JSON.parse(resultString);

        return resultJSON; // Retorna os dados JSON
    },

    async getUser(id: string): Promise<User> {
        const response = await fetch(`https://66c67221134eb8f43497a070.mockapi.io/users/${id}`, defaultHeaders)

        return response.json()
    },

    async createUser(user: User): Promise<User> {
        const response = await fetch('https://66c67221134eb8f43497a070.mockapi.io/users', {
            ...defaultHeaders,
            method: 'POST',
            body: JSON.stringify(user)
        })

        return response.json()
    }
}

export default apiClient
