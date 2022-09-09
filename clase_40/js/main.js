window.onload = () => {
  const app = document.getElementById("root");
  // const container = document.createElement("div");
  // container.setAttribute("class", "container");
  // app.appendChild(container);
  const container = document.querySelector(".container");

  // Aqui debemos agregar nuestro fetch
  let domain = "http://127.0.0.1:3031";
  let movies = "/api/movies"

  fetch(domain + movies) // GET
    .then(response => response.json())
    .then(result => {
      listarMovies(result.data);
    })
    .catch(error => {
      console.error("fallo la peticion", error);
    });
  ;

  function listarMovies(movies) {
    let html = "<ul>";

    for (let index = 0; index < movies.length; index++) {
      const movie = movies[index];
      html += `
        <li>
          ${movie.title}
        </li>
      `;
    }

    html += "</ul>"; 

    container.innerHTML = html;
  }

  /** Codigo que debemos usar para mostrar los datos en el frontend
    let data = peliculas.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
    });
  */
};
