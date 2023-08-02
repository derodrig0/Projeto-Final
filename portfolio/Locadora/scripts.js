geraID();

function geraID() {
  var elements = document.querySelectorAll('th[scope="row"]');
  var lastElement = elements[elements.length - 1];
  var value = lastElement.textContent;
  value = parseInt(value) + 1;
  let cod = document.querySelector("#codFilm");
  cod.value = value;
  return value;
}

function validationForm() {
  //let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationCast = document.forms["register"]["cast"].value;
  let validationIMDb = document.forms["register"]["imdb"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationTitle == "") {
    alert("Título não pode ser vazio");
    return false;
  }
  if (validationDirector == "") {
    alert("Diretor não pode ser vazio");
    return false;
  }
  if (validationDate == "") {
    alert("Data não pode ser vazio");
    return false;
  }
  if (validationCast == "") {
    alert("Ator/Atriz não pode ser vazio");
    return false;
  }
  if (validationIMDb == "") {
    alert("IMDB não pode ser vazio");
    return false;
  }
  if (validationRadio == "") {
    alert("Gênero deve ser selecionado");
    return false;
  }

  insert();
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let cast = document.forms["register"]["cast"].value;
  let imdb = document.forms["register"]["imdb"].value;
  let radio = document.forms["register"]["radio"].value;

  let insert;

  // if (radio == 'acao') {
  //   insert = document.getElementById("insertAcao");
  // }

  // if (radio == 'animacao') {
  //   insert = document.getElementById("insertAnim");
  // }

  // if (radio == 'romance') {
  //   insert = document.getElementById("insertRoman");
  // }

  // if (radio == 'suspence') {
  //   insert = document.getElementById("insertSusp");
  // }

  insert = document.getElementById("insertRow");

  insert.innerHTML = `
    <th scope="row">${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${cast}</td>
    <td>${imdb}</td>
    <td>${radio}</td>
  `;

  console.log(insert);

  document.forms["register"].reset();

  // let id = document.querySelector('#codFilm');
  //   id.value = id.value + 1;
}
