/**
 * VISTA
 * La vista es responsable de formatear los datos en un formato adecuado, en este caso, JSON.
 */

export function renderizarSuperheroe(superheroe){
    return JSON.stringify(superheroe, null, 2); // Formatea el objeto con una sangría de 2 espacios
}

export function renderizarListaSuperheroes(superheroes){
    return JSON.stringify(superheroes, null, 2); // Formatea el array con una sangría de 2 espacios
}