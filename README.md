<h4 align="center">
<img src="./frontend/src/assets/pokemon-pokeball-logo.png" align="center"/>
<br><br>
👾 Saiba mais sobre seus pokemons favoritos com o Pokemon Listing  👾
</h4>
<p align="center">
    <img src="https://img.shields.io/github/repo-size/AbnerPS/pokemon-listing"/>
    <img src="https://img.shields.io/github/languages/count/AbnerPS/pokemon-listing?color=purple"/>
    <img src="https://img.shields.io/github/last-commit/AbnerPS/pokemon-listing"/>
    <img src="https://img.shields.io/github/issues/AbnerPS/pokemon-listing?color=red"/>
    <img src="https://img.shields.io/github/license/AbnerPS/pokemon-listing?color=yellow"/>
</p>

# :bulb: Sobre o projeto 

Esse projeto consiste em uma Wiki do universo Pokémon, emglobando os animes, filmes e jogos da franquia.
Nele você poderá fazer um cadastro de usuário, logar no sistema com seu login e senha e por fim vizualizar diversos Pokémons disponiveis na [PokeAPI](https://pokeapi.co/docs/v2).

# ⚙️ Como executar


Para executar e testar a aplicação na sua máquina, primeiramente clone o repositório no seu computador.
Após fazer o fork e ter todos os arquivos na sua maquina, siga os seguintes passos:

### Iniciar Servidor

Antes de inicializar o servidor, você deve entrar na pasta **"./backend"** e renomear o arquivo **".env-example"** para **".env"**.
Agora, para instalar todas as dependências do servidor, entre na pasta **"./backend"** e execute o seguinte comando:

```bash
$ npm install
```
Agora para criar a estrutura base do banco de dados, execute o comando:

```bash
$ npm run knex:migrate
```
Com as dependências instaladas e o banco de dados pronto, execute este comando para iniciar o servidor:

```bash
$ npm start
```

### Iniciar App Web

Após iniciar a execução do servidor, inicie a aplicação web entrando na pasta **"./frontend"** e executando os comandos:

```bash
$ npm install
$ npm start
```

**E pronto, agora você pode usar à vontade toda a aplicação.** :)

# 🧑🏽‍💻 Tecnologias

Segue abaixo uma lista com as principais técnologias utilizados no desenvolvimento desta aplicação.

### ⚛️ Frameworks
- [x] [Node.js](https://nodejs.org/en/) 
- [x] [React](https://pt-br.reactjs.org/)

### 📚 Bibliotecas e Dependências
- [x] [Express](https://expressjs.com/)
- [x] [Axios](https://github.com/axios/axios)
- [x] [JWT (Json Web Token)](https://jwt.io/)
- [x] [React Suite](https://rsuitejs.com/)
- [x] [Styled Components](https://styled-components.com/)

### 🏛 Banco de dados
- [x] [Knex](http://knexjs.org/)
- [x] [SQLite](https://www.mysql.com/)


# :computer: Imagens da Pagina Web

<p align="center">
  <img src="./screenshots/tela-login.png" alt="Tela de Login" width="800">
  <img src="./screenshots/tela-cadastro.png" alt="Tela de Cadastro" width="800">
  <img src="./screenshots/tela-principal-01.png" alt="Tela Principal 1" width="800">
  <img src="./screenshots/tela-principal-02.png" alt="Tela Principal 2" width="800">
  <img src="./screenshots/modal-detalhes-01.png" alt="Modal de Detalhes 1" width="800">
  <img src="./screenshots/modal-detalhes-02.png" alt="Modal de Detalhes 2" width="800">
</p>

 # :tv: Redes Sociais
 Me siga nas minhas redes sociais 😊
 
   <p>
  <a href="https://github.com/AbnerPS" target="__blank">
    <img src="https://img.shields.io/badge/-Github-24292E?style=flat-square&labelColor=24292E&logo=github&logoColor=white" alt="Github" />
  </a>

  <a href="https://www.linkedin.com/in/abner-pereira-silva-8715a326/" target="__blank">
    <img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white" alt="LinkedIn" />
  </a>

  <a href="https://codepen.io/Abner_Silva" target="__blank">
    <img src="https://img.shields.io/badge/-Codepen-0ead69?style=flat-square&labelColor=0ead69&logo=codepen&logoColor=white" alt="Codepen" />
  </a>

  <a href="https://www.facebook.com/AbnerGuthiwill/" target="__blank">
    <img src="https://img.shields.io/badge/-Facebook-d7263d?style=flat-square&labelColor=d7263d&logo=facebook&logoColor=white" alt="Facebook" />
  </a>
</p>
