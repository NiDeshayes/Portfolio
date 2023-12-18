  <template>
    
    <div>
      <div class="header">
        <header class="logo-header" @click="goToHome">
          <router-link to="/">
            <img src="./assets/logos-21-77-.webp" alt="" class="logo">
          </router-link>
        </header>
      </div>
      
      <NavBar/>
      <router-view/>
    </div>
    
    
    <footer class="footer">
      <div class="footer-content">
        <div class="social-icons">
          <ul>

            <li><a href="https://twitter.com/twitterfrance" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/home?originalSubdomain=fr" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/" target="_blank"><i class="fab fa-github"></i></a></li>
            
          </ul>
          <!-- Ajoutez d'autres icônes de réseaux sociaux avec des liens au besoin -->
        </div>
        <p> DESHAYES Nicolas- Dernière mise à jour le 11/12/2023</p>
        
      </div>
    </footer>

  </template>

<script>


import NavBar from './components/NavBar.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    
  },
  methods: {
    goToHome() {
      
    },
  },
};


</script>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}



.logo-header {
  text-align: center;
  padding: 10px; /* Ajoute une marge pour plus d'espace autour du logo */
  background-color: transparent;
}

.logo {
  width: 80px; /* Redimensionne la largeur du logo */
  height: auto; /* Permet au logo de conserver son rapport hauteur/largeur original */
  background-color: transparent;
}


header img {
      cursor: pointer;
}



.footer {

  
  padding: 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-icons {
  margin-bottom: 10px;
}

.social-icons a {
  margin: 0 10px;
  display: inline-block;
}

.social-icons img {
  width: 30px;
  height: 30px;
}




</style>




