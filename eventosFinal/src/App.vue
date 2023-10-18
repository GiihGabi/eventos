<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import "./components/style/app.css";
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <div></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-success" id="teste"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <p class="offcanvas-title" id="offcanvasDarkNavbarLabel" style="color: #6FA7CB">MENU</p>
            <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div id="menu-conteudo">
            <div>
              <div>
                <routerLink to="/" class="nav-link" aria-current="page">Eventos</routerLink>
              </div>
              <div>
                <routerLink to="/cadEventos" class="nav-link" aria-current="page">Cadastrar Evento</routerLink>
              </div>
              <div>
                <routerLink to="/fazerVenda" class="nav-link" aria-current="page">Fazer Venda</routerLink>
              </div>
              <div>
                <routerLink to="/cadComprador" class="nav-link" aria-current="page">Cadastrar Comprador</routerLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div class="main">
    <router-view></router-view>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-toggler {
  border: none;
  margin: 0 40px 0 0;

}

.navc {
  width: 2300px;
  display: flex;
  justify-content: center;
}

nav[data-v-7a7a37b1] {
  height: 100px;
  background-color: #000235;
  box-shadow: 0px 0px 20px 0px #009BFF;
}

.navbar-toggler-icon {
  width: 50px;
  height: 50px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(111, 167, 203, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='4' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
#offcanvasDarkNavbar{
  background-color: white !important;
  border-left: 1px solid #009BFF;
  font-size: 26px;
}
.offcanvas-header {
  justify-content: space-between;
  margin: 2em 1em 0 1em;
}

#menu-conteudo {
  font-size: 26px;
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #6FA7CB;
}
.offcanvas-body {
  color: white;
}

.nav-link:hover {
  color: #009BFF;
}
</style>
