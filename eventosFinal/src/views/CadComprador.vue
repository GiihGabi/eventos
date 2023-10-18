<template>
  <div class="app">
    <div class="container">
      <p class="Login">Comprador</p>
      <div class="row">
        <div class="col-md-6 margin-input" >
          <label for="">Nome</label>
          <input type="text" class="form-control inputs" placeholder="" />
        </div>
        <div class="col-md-6 margin-input">
          <label for="">Sobrenome</label>
          <input type="text" class="form-control inputs" placeholder="" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 margin-input">
          <label for="">Email</label>
          <input type="email" min="1" class="form-control inputs" placeholder="" />
        </div>
        <div class="col-md-4 margin-input" >
          <label for="">Data do Evento</label>
          <input type="date"  class="form-control inputs">
        </div>
        <div class="col-md-4" id="ativo">
          <label class="switch">
            <input type="checkbox" @click="toggleCheckbox">
            <div class="slider round"></div>
          </label>
          <p style="padding: 12px 0 0 12px">{{ checkbox }}</p>
        </div>
      </div>
      <div class="cadEvento">
        <button type="button" class="buttonEvento">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loginData: {
        username: "",
        password: ""
      },
      isLoggedIn: false,
      checkbox: false
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
    },
    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
    }
  }
};
</script>




<style scoped>
@import url('https://fonts.cdnfonts.com/css/lexend-deca');
.app {
  background-color: black;
  background-image: url("../components/image/initialPage.png");
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 100%;
  height: 100vh;
  background-attachment: fixed;
  font-family:'Lexend Deca', sans-serif;
}

.switch {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #101010;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

#ativo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  color: white;
}
.Login{
  display: flex;
  justify-content: center;
  color: white;
  padding-top: 2em;
  text-transform: uppercase;
  font-size: 60px;
  text-decoration: underline;
  font-family:'Lexend Deca', sans-serif;
}
label {
  color: white;
}
input {
  border: none;
}
.cadEvento {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}

.buttonEvento {
  padding: 0.5em 3em;
  border-radius: 2em;
  border: none;
  color: white;
  background-color: #003264;
}

.width-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.container {
  width: 800px;
}

.margin-input {
  margin-top: 10px;
}

input[type="date"] {
  display:block;
  position:relative;
  font-size:1rem;
  font-family:monospace;  
  border:1px solid #8292a2;
  border-radius:0.25rem;
  background:
    white
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' viewBox='0 0 20 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23688EBB' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' transform='translate(1 1)'%3E%3Crect width='18' height='18' y='2' rx='2'/%3E%3Cpath d='M13 0L13 4M5 0L5 4M0 8L18 8'/%3E%3C/g%3E%3C/svg%3E")
    right 1rem
    center
    no-repeat;
  
  cursor:pointer;
}
input[type="date"]:focus {
  outline:none;
  border-color:#3acfff;
  box-shadow:0 0 0 0.25rem rgba(0, 120, 250, 0.1);
}

::-webkit-datetime-edit {}
::-webkit-datetime-edit-fields-wrapper {}
::-webkit-datetime-edit-month-field:hover,
::-webkit-datetime-edit-day-field:hover,
::-webkit-datetime-edit-year-field:hover {
  background:rgba(0, 120, 250, 0.1);
}
::-webkit-datetime-edit-text {
  opacity:0;
}
::-webkit-clear-button,
::-webkit-inner-spin-button {
  display:none;
}
::-webkit-calendar-picker-indicator {
  position:absolute;
  width:2.5rem;
  height:100%;
  top:0;
  right:0;
  bottom:0;
  
  opacity:0;
  cursor:pointer;
  
  color:rgba(0, 120, 250, 1);
  background:rgba(0, 120, 250, 1);
 
}

input[type="date"]:hover::-webkit-calendar-picker-indicator { opacity:0.05; }
input[type="date"]:hover::-webkit-calendar-picker-indicator:hover { opacity:0.15; }
</style>