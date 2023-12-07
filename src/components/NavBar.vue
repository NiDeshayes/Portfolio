<!-- NavbarMultiWord.vue -->
<template>
    <div :class="{ 'navbar-open': isOpen }">
      <button @click="toggleNavbar"><i class="fas fa-bars"></i></button>
      <nav>
        <ul v-if="isOpen" class="nav-list">
          <li><a href="/">Accueil</a></li>
          <li><a href="/CV">CV</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="../assets/CAHIER_DES_CHARGES.pdf">Cahier des charges</a></li>
          <li><a href="https://www.linkedin.com/home?originalSubdomain=fr"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="https://twitter.com/twitterfrance"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://github.com/"><i class="fab fa-github"></i></a></li>
        </ul>
        <ul v-if="isOpen" class="nav-list">
  
  
            

        </ul>

      </nav>
    </div>
    
</template>
  
<script>

  export default {
    name: 'NavBar',
    data() {
      return {
        isOpen: true,
      };
    },
    methods: {
      toggleNavbar() {
        this.isOpen = !this.isOpen;
      },
    },
  };
</script>
  
<style scoped>
  /* Add specific styles for your multi-word navbar here */
  div {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 20;
    left: 00px; /* Initial position off-screen */
    transition: left 0.3s ease; /* Smooth transition effect */
  }
  
  .navbar-open {
    left: 0; /* Move the navbar on-screen when isOpen is true */
  }
  
  button {
    background-color: #333;
    color: rgb(250, 248, 248);
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  nav {
    background-color: #333;
    padding: 10px;
    height: 750px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    text-decoration: none;
    color: rgb(245, 240, 240);
    font-weight: bold;
  }

  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-list li {
    margin-bottom: 35px;
  }

  .nav-list a {
    text-decoration: none;
    color: rgb(245, 240, 240);
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .nav-list a > img {
    height: 50px;
    background-size: contain;
    width: 50px;
    transition: opacity .3s;
    margin-right: 10px;
  }




  
</style>
