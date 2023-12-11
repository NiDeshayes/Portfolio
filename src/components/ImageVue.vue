<template>
  
  <div>
    
    <div class="background-container">
      <img
        alt="Vue logo"
        src="../assets/Fond.jpg"
        class="resized-image"
        @click="openModal"
      />
      <dialog v-if="isModalOpen" @close="closeModal" @click="closeModalOutside">
        <div class="modal-content">
          <button class="close-button" @click="closeModal">Fermer la modal</button>
          <h2> Portfolio </h2>
          <p>Date de creation:11/12/2023 </p>
          <p>Technologies utilisées : vue js3 / github /Html/Java script/Css </p>
          <p>

            <a :href="project.visitLink" target="_blank">Visiter le site ou le fichier PDF</a>
          </p>
          <p>
            <a v-if="project.githubLink" :href="project.githubLink" target="_blank">Repository GitHub</a>
          </p>
        </div>
      </dialog>
    </div>

  </div>

  <div>


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
  </div>
  
  </template>


<script>

export default {
  data() {
    return {
      isModalOpen: false,
      project: {
        title: '',
        creationDate: '',
        technologies: '',
        visitLink: 'git@github.com:NiDeshayes/Portfolio.git',
        githubLink: 'git@github.com:NiDeshayes/Portfolio.git',
      },
    };
  },
  methods: {
    openModal() {
      // Vous devrez définir ces valeurs en fonction du projet actuel
      this.project = {
        title: 'Titre du projet',
        creationDate: 'Date de création',
        technologies: 'Technologies utilisées',
        visitLink: '',
        githubLink: 'https://github.com/NiDeshayes/Portfolio',
      };
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    closeModalOutside(event) {
      // Fermer la modal si le clic provient de l'arrière-plan
      if (event.target.tagName === 'DIALOG') {
        this.closeModal();
      }
      
    },
  },
};
</script>

<style scoped>
/* ... Vos styles existants ... */

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal-dialog {
  position: relative;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;

}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

</style>
