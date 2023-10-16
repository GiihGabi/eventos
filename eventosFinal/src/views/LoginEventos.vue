<template>
    <div class="app">
      <div class="teste1">
        <p class="Login">Login</p>
        <div class="backgroundOverlay"></div>
        <div class="inputs">
          <input v-model="loginData.username" type="text" class="ra-login" placeholder="Login">
        </div>
        <div class="inputs">
          <input v-model="loginData.password" type="password" class="ra-login" placeholder="Senha">
        </div>
        <div class="buttonEntrar">
          <button type="button" class="buttonLogin" @click="handleLogin">Entrar</button>
        </div>
        <div class="cadastrar">
          <p class="textCadastrar">Não tem login? <a href="/" class="linkCadastrae">Cadastre-se</a></p>
        </div>
        <div v-if="isLoggedIn" class="loggedInMessage">
          <p>Você está autenticado!</p>
        </div>
      </div>
    </div>
  </template>


  <script>
  import "../components/style/style.css";
  
  export default {
    data() {
      return {
        loginData: {
          username: "",
          password: ""
        },
        isLoggedIn: false
      };
    },
    methods: {
      handleLogin() {
        const { username, password } = this.loginData;
  
        if (username === "user" && password === "password") {
          this.isLoggedIn = true;
          console.log("Usuário autenticado!");
        } else {
          console.log("Credenciais inválidas. Tente novamente.");
        }
      }
    }
  };
  </script>



<style scoped>
@import url('https://fonts.cdnfonts.com/css/lexend-deca');
.app {
  height: 100vh; /* 100% da altura da viewport */
  background-color: #000235; /* Substitua pelo seu código de cor desejado */
  margin: 0; /* Remove as margens padrão */
  display: flex;
  justify-content: center;
  align-items: center;
}

.teste1 {
  background-color: #000235;
}

.Login{
    display: flex;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    font-size: 60px;
    text-decoration: underline;
    font-family:'Lexend Deca', sans-serif;
}

.backgroundOverlay {
  position: fixed;
  width: 2478px;
  height: 1342px;
  left: calc(50% - 2000px/2 + 1195px);
  top: 691px;
  background: #6FA7CB;
  filter: blur(250px);
  z-index: 1; /* Ajuste conforme necessário */
}

.inputs {
  position: relative;
  z-index: 2;
  width: 30em;
  display: flex;
  justify-content: center;
  margin-top: 1em;
  border: none;
}
  
  .ra-login {
    width: 50em;
    border-radius: 20px;
    padding: 9px;
    font-family: 'Lexend Deca', sans-serif;
    transition: border 0.3s ease-in-out; /* Adiciona uma transição suave à borda */
    border: 2px solid #003264; /* Cor da borda inicial */
  }
  
  .inputs:hover .ra-login {
    border: 2px solid #005aa7; /* Cor da borda ao passar o mouse sobre .inputs */
  }

.buttonEntrar{
    display: flex;
    justify-content: center;
    margin-top: 1em;
}

.buttonLogin{
    padding: 8px 90px;
    border-radius: 20px;
    font-family:'Lexend Deca', sans-serif;
    background-color: #003264;
    color: white;
    border: 0;
    transition: transform 0.3s ease-in-out;
}

.buttonLogin:hover {
    transform: scale(1.1);
    background-color: #014b96;
  }

.cadastrar{
    display: flex;
    justify-content: center;
    margin-top: 0.5em;
}

.textCadastrar{
    color: white;
    font-family:'Lexend Deca', sans-serif;
}

</style>
