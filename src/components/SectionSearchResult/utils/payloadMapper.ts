import {MappedPayload, Pokemon} from "../types.ts";

export const payloadMapper = (data: Pokemon): MappedPayload => {
    const {name, id, height, weight, abilities} = data

    return {
        name,
        id,
        abilities,
        image: data?.sprites?.other['dream_world'].front_default || null,
        imageBack: data?.sprites.back_default || null,
        ...(height && {height: height / 10}),
        ...(weight && {weight: weight / 10}),
        types: data.types.map(({type}) => type.name),
        stats: data.stats
    }
}
