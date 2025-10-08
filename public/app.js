// JSON
const dadosLiterarios = {
  autores: [
    {
      id: 1,
      nome: "Machado de Assis",
      nacionalidade: "Brasileiro",
      img: "img/machado.png",
      biografia:
        "Considerado um dos maiores escritores da literatura brasileira, fundador da Academia Brasileira de Letras.",
      obras: [
        {
          titulo: "Dom Casmurro",
          ano_publicacao: "1899",
          img: "img/domcasmurro.jpg",
          sinopse:
            "Bentinho narra sua história marcada por ciúmes e dúvidas sobre a fidelidade de Capitu.",
        },
        {
          titulo: "Memórias Póstumas de Brás Cubas",
          ano_publicacao: "1881",
          img: "img/brascubas.jpg",
          sinopse:
            "Narrado por um defunto, o livro é uma crítica irônica à sociedade do século XIX.",
        },
      ],
    },
    {
      id: 2,
      nome: "Clarice Lispector",
      nacionalidade: "Brasileira",
      img: "img/clarice.jpg",
      biografia:
        "Autora de obras introspectivas e poéticas, é uma das vozes mais marcantes da literatura brasileira moderna.",
      obras: [
        {
          titulo: "A Hora da Estrela",
          ano_publicacao: "1977",
          img: "img/estrela.jpg",
          sinopse:
            "A história de Macabéa, uma jovem nordestina que vive no Rio de Janeiro, contada com lirismo e crítica social.",
        },
        {
          titulo: "Perto do Coração Selvagem",
          ano_publicacao: "1943",
          img: "img/perto.jpg",
          sinopse:
            "Romance de estreia que revela a complexidade emocional e filosófica da protagonista Joana.",
        },
      ],
    },
    {
      id: 3,
      nome: "Graciliano Ramos",
      nacionalidade: "Brasileiro",
      img: "img/graciliano.jpg",
      biografia:
        "Reconhecido por sua escrita seca e direta, retratou a vida no sertão nordestino com profundidade e realismo.",
      obras: [
        {
          titulo: "Vidas Secas",
          ano_publicacao: "1938",
          img: "img/vidassecas.jpg",
          sinopse:
            "A saga de uma família sertaneja em busca de sobrevivência, marcada pela seca e pela miséria.",
        },
        {
          titulo: "São Bernardo",
          ano_publicacao: "1934",
          img: "img/saobernardo.jpg",
          sinopse:
            "A trajetória de Paulo Honório, um homem ambicioso que narra sua ascensão e queda pessoal.",
        },
      ],
    },
    {
      id: 4,
      nome: "Jorge Amado",
      nacionalidade: "Brasileiro",
      img: "img/jorge.jpg",
      biografia:
        "Um dos autores mais populares do Brasil, retratou com humor e crítica social a vida na Bahia, exaltando o povo, a cultura e os conflitos sociais.",
      obras: [
        {
          titulo: "Capitães da Areia",
          ano_publicacao: "1937",
          img: "img/capitaes.jpg",
          sinopse:
            "A história de um grupo de meninos de rua em Salvador que vivem de pequenos crimes, mas também de sonhos e solidariedade.",
        },
        {
          titulo: "Gabriela, Cravo e Canela",
          ano_publicacao: "1958",
          img: "img/gabriela.jpg",
          sinopse:
            "Gabriela, uma mulher sensual e livre, transforma a vida de uma cidade marcada por coronelismo e tradições conservadoras.",
        },
      ],
    },
    {
      id: 5,
      nome: "Manuel Bandeira",
      nacionalidade: "Brasileiro",
      img: "img/bandeira.jpg",
      biografia:
        "Poeta modernista que soube unir lirismo, simplicidade e profundidade, com temas como morte, infância e o cotidiano.",
      obras: [
        {
          titulo: "Libertinagem",
          ano_publicacao: "1930",
          img: "img/libertinagem.jpg",
          sinopse:
            "Coletânea de poemas que marca o auge do modernismo de Bandeira, com linguagem coloquial e temas existenciais.",
        },
        {
          titulo: "Estrela da Vida Inteira",
          ano_publicacao: "1966",
          img: "img/estreladavida.jpg",
          sinopse:
            "Antologia poética que reúne os principais poemas do autor, revelando sua trajetória lírica e humana.",
        },
      ],
    },
    {
      id: 6,
      nome: "Mário de Andrade",
      nacionalidade: "Brasileiro",
      img: "img/mario.jpg",
      biografia:
        "Figura central do modernismo brasileiro, foi escritor, crítico, musicólogo e defensor da cultura nacional.",
      obras: [
        {
          titulo: "Macunaíma",
          ano_publicacao: "1928",
          img: "img/macunaima.jpg",
          sinopse:
            "A saga do herói sem caráter que percorre o Brasil em busca de um amuleto mágico, misturando mitos indígenas e crítica social.",
        },
        {
          titulo: "Pauliceia Desvairada",
          ano_publicacao: "1922",
          img: "img/pauliceia.jpg",
          sinopse:
            "Livro de poemas que inaugura o modernismo no Brasil, com versos livres e uma visão irreverente da cidade de São Paulo.",
        },
      ],
    },
    {
      id: 7,
      nome: "Cecília Meireles",
      nacionalidade: "Brasileira",
      img: "img/cecilia.jpg",
      biografia:
        "Poeta lírica e delicada, sua obra é marcada por musicalidade, espiritualidade e reflexões sobre o tempo e a existência.",
      obras: [
        {
          titulo: "Romanceiro da Inconfidência",
          ano_publicacao: "1953",
          img: "img/romanceiro.jpg",
          sinopse:
            "Poemas que narram os eventos da Inconfidência Mineira com lirismo e profundidade histórica.",
        },
        {
          titulo: "Viagem",
          ano_publicacao: "1939",
          img: "img/viagem.jpg",
          sinopse:
            "Obra-prima da autora, com poemas que exploram o universo interior e a busca por transcendência.",
        },
      ],
    },
    {
      id: 8,
      nome: "Carlos Drummond de Andrade",
      nacionalidade: "Brasileiro",
      img: "img/drummond.jpg",
      biografia:
        "Um dos maiores poetas da língua portuguesa, sua obra mescla ironia, melancolia e crítica social com profundidade filosófica.",
      obras: [
        {
          titulo: "Alguma Poesia",
          ano_publicacao: "1930",
          img: "img/alguma.jpg",
          sinopse:
            "Primeiro livro de Drummond, traz o famoso poema 'No meio do caminho' e marca o início de sua voz singular.",
        },
        {
          titulo: "A Rosa do Povo",
          ano_publicacao: "1945",
          img: "img/rosa.jpg",
          sinopse:
            "Poemas escritos durante a Segunda Guerra Mundial, com forte crítica social e engajamento político.",
        },
      ],
    },
  ],
};

// JavaScript
//Página Autores
function carregaAutor() {
  let autoresContainer = document.getElementById("autoresContainer");
  autoresContainer.innerHTML = "";

  for (let i = 0; i < dadosLiterarios.autores.length; i++) {
    let autor = dadosLiterarios.autores[i];
    let obrasHTML = "";

    for (let j = 0; j < autor.obras.length; j++) {
      let obra = autor.obras[j];
      obrasHTML += `
        <li class="list-group-item">
          <strong>${obra.titulo}</strong> (${obra.ano_publicacao})<br>
          <small>${obra.sinopse}</small>
        </li>
      `;
    }

    let card = `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card h-100 mb-4 shadow-sm">
          <img src="${autor.img}" class="card-img-top" alt="${autor.nome}">
          <div class="card-body">
            <h5 class="card-title">${autor.nome}</h5>
            <p class="card-text">${autor.biografia}</p>
          </div>
        </div>
      </div>
    `;

    autoresContainer.innerHTML += card;
  }
}

//Página Obras
function carregaObras() {
  const container = document.getElementById("obrasContainer");
  container.innerHTML = "";

  for (let i = 0; i < dadosLiterarios.autores.length; i++) {
    const autor = dadosLiterarios.autores[i];

    for (let j = 0; j < autor.obras.length; j++) {
      const obra = autor.obras[j];

      const card = `
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 mb-4 shadow-sm">
            <img src="${obra.img}" class="card-img-top" alt="${obra.titulo}">
            <div class="card-body">
              <h5 class="card-title">${obra.titulo}</h5>
              <p class="card-text"><strong>Autor:</strong> ${autor.nome}</p>
              <p class="card-text"><strong>Ano:</strong> ${obra.ano_publicacao}</p>
              <p class="card-text">${obra.sinopse}</p>
            </div>
          </div>
        </div>
      `;

      container.innerHTML += card;
    }
  }
}