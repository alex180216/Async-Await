//ASYNC / AWAIT
//Ejecula la funcion y no avanza hasta que termina la ejecucion

async function leerTodos(){
    //esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');


    //procede cuando la respuesta esté hecha
    const datos = await respuesta.json();

    return datos;
}

leerTodos()
    .then(usuarios => console.log(usuarios));
