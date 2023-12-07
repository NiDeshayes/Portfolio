<template>


    <div>
    <h1> DESHAYES Nicolas </h1>
    <p> Developpeur WEB Full stack (Html5,VueJs3,Css3,GitHub)  formé par le Centre Européen de formations</p>
    </div>


    <div class="background-container">
      <img alt="Vue logo" src="../assets/Fond.jpg" class="resized-image"> 
      <HelloWorld msg=""/>
      

    </div>

    <div class="boutons">
        <button>precedent</button>
        <button>suivant</button>
        

    </div>  
    
    <div class="formulaire">
        <h2>Formulaire de Contact</h2>
        <form @submit.prevent="submitForm">
            <label for="name">Nom/Prénom:</label>
            <input type="text" v-model="name" required>

            <label for="subject">Objet:</label>
            <input type="text" v-model="subject" required>

            <label for="message">Message:</label>
            <textarea v-model="message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
     </div>

     
     

</template>


<script>
import HelloWorld from './HelloWorld.vue'
export default {
  name: 'ImageVue',
  components: {
    HelloWorld
}

}


</script>


<style>


.background-container {
 
 z-index: -1;
 max-width: 100%;
 height: 200px;
 padding-top: 25px;
 padding-left: 50px;
 
}

.resized-image {
   width: 1000px;
   height: 500px;
   left: 245px;
   

}

.resized-image-false {

 max-width: 1000px;
   max-height: 1000px;
   left: 50px;
   

}

.formulaire {

    padding-top: 400px;

}

h1 {

    font-size:medium;
    color: black;
    margin:0;
}

h2 {

    font-size: medium;
    color: black;
}


.boutons {
  text-align: center;
  margin-top: 350px;
  
}

.boutons button {
  margin: 0 10px; /* Ajoute une marge entre les boutons */
}

</style>