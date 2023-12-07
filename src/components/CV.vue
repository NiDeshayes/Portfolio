<template>

    
    
     <div style="max-width: 1160px;">
        <header class="Header"> 
        <div class="bloc-rouge">
            <a href="../assets/photo.jpg"><img src="../assets/photo.jpg" alt="Photo de DESHAYES Nicolas" class="photo"></a>
                <div class="nom">DESHAYES Nicolas</div> 
                <div class="profession">Développeur Web junior</div>
            </div> 

            <div class="bloc-gris">
                <div class="adresse">
                    <a href="https://maps.app.goo.gl/iK3yrFd42MEKkx3H9">
                        <div class="rue">Eiffel Tower</div>
                        <div class="ville">Paris, 75</div>
                    </a>
                </div>

                <div class="mail"><a href="mailto:dnicolas120@gmail.com">dnicolas120@gmail.com</a></div>
                <div class="telephone"><a href="tel:+33612345621">+33612345621</a></div>
            </div>
        </header>

        <div class="partie-body">
            <div class="cadre-gauche">
                <div class="titre">À propos</div>
                <p class="text-white" style="text-indent: 10%;">Qui cum venisset ob haec festinatis itineribus Antiochiam,
                    praestrictis palatii ianuis, contempto Caesare, quem videri decuerat,
                    ad praetorium cum pompa sollemni perrexit morbosque diu causatus nec regiam introiit nec processit in publicum,
                    sed abditus multa in eius moliebatur exitium addens quaedam relationibus supervacua, quas subinde dimittebat ad principem.
                </p>

                <h2 class="titre">Langues parlées</h2>
                
                <ul class="text-white">
                    <li>Langue Natale : Français</li>
                    <li>Anglais : Intermédiaire</li>
                </ul>

                <h3 class="titre ">Centres d'intérêt</h3>

                <ul class="text-white">
                    <li>Football</li>
                    <li>Informatique</li>
                    <li>Mécanique</li>
                </ul>
            </div>

            <div class="cadre-millieu">
                <div>
                    <div class="titre-central"><div class="petit-carré"></div>Expériences professionnelles</div>

                    <h1 class="sous-titre">Intitulé du poste chez Nom d'entreprise</h1>
                    
                    <p class="dates">Du xxxx au xxxx</p>
                    
                    <ul class="trait-rouge">
                        <li>Mission 1</li>
                        <li>Mission 2</li>
                        <li>Mission 3</li>
                    </ul>

                    <h1 class="sous-titre">Intitulé du poste chez Nom d'entreprise</h1>
                    
                    <p class="dates">Du xxxx au xxxx</p>
                    
                    <ul class="trait-rouge">
                        <li>Mission 1</li>
                        <li>Mission 2</li>
                        <li>Mission 3</li>
                    </ul>
                    
                    <h1 class="sous-titre ">Intitulé du poste chez Nom d'entreprise</h1>
                    
                    <p class="dates">Du xxxx au xxxx</p>
                    
                    <ul class="trait-rouge">
                        <li>Mission 1</li>
                        <li>Mission 2</li>
                        <li>Mission 3</li>
                    </ul>
                    
                    <div class="titre-central"><div class="petit-carré"></div>Diplômes/Formations</div>

                    <h1 class="sous-titre">Diplôme/Formation N.1</h1>
                    
                    <p class="dates">Du xxxx au xxxx</p>
                    
                    <ul class="trait-rouge">
                        <li>Nom de l'école</li>
                    </ul>
                    
                    <h1 class="sous-titre">Diplôme/Formation N.2</h1>
                    
                    <p class="dates">Du xxxx au xxxx</p>
                    
                    <ul class="trait-rouge">
                        <li>Nom de l'école</li>
                    </ul>
                    
                    <div class="titre-central"><div class="petit-carré"></div>Compétences</div>
                    
                    <ul class="trait-rouge">
                        <li>HTML 5 expert</li>
                        <li>CSS 3 intermédiaire</li>
                        <li>GitHub débutant</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <footer>
            <div class="fond-bloc-rouge">
                <div class="logos">
                    <div class="social-icon"><a href="https://www.linkedin.com/home?originalSubdomain=fr"><img src="../assets/linkedin.png" alt="LinkedIn"></a></div>
                    <div class="social-icon"><a href="https://twitter.com/twitterfrance"><img src="../assets/twitter.jpg" alt="Twitter"></a></div>
                    <div class="social-icon "><a href="https://github.com/"><img src="../assets/Github.png" alt="GitHub"></a></div>
                </div>
                <div class="last-text ">Dernière mise à jour le 03/11/2023</div>
            </div>
        </footer>
    </div>


</template>


<script>

export default {
  name: 'CV',
  
}
   

</script>




<style>

.bloc-rouge {

display: flex;
flex-direction: column; /* Pour que les éléments à l'intérieur soient empilés verticalement */
justify-content: center;
align-items: center;
padding: 3% 0; /* Utilisation d'une seule propriété pour définir la marge en haut et en bas */
background-color: #782221;
text-align: center;
color: white;


}   

.photo {

background-image:  url(../assets/photo.jpg);
width:100px ;
height:100px;
background-repeat: no-repeat;
background-size: 100%;
border-radius: 50%;
box-shadow: 10px 5px 5px black;
margin-bottom: 1%;
/* margin-left: auto;
margin-right: auto; */
cursor: zoom-in;

}

.bloc-gris {

font-size: 10px;
padding-top: 20px;
background-color: #2c1d27 ;
color: white;
display: flex;
justify-content:  space-between;
padding-left: 2%;
padding-right: 2%;
padding-bottom: 10px;
}

.mail >*{

padding-right: 30px;
color: white;
text-decoration-line: none;
}

.adresse >*{

color: white;
text-decoration-line: none;

}

.telephone >*{

color: white;
text-decoration-line: none;

}





.cadre-gauche {


padding-top: 25px;
width:  20%;
background-color: #782221;
padding-right: 40px; 
padding-left: 20px;



}



.titre { 

display: flex;
justify-content: center;
align-items: center;
font-family: 'Lato', sans-serif;
font-size: 20px;
font-weight: 900;
background-color: #dbc2a4;
padding-left: 20px;
/* font-family: 'Lato', sans-serif;   
font-size: 20px;
font-weight: 900;
background-color: #dbc2a4 ;
padding-left: 20px  ; 
display: flex; */

}






.cadre-millieu {

margin-top: 20px;
padding-left: 5%; 
width: 80%;

}


.sous-titre{

font-family: 'Raleway', sans-serif;    
font-size:  14px;
}


.text {

font-family: 'Raleway', sans-serif;
padding-left: 100px;

}

.partie-body {

display: flex ;

}

body {
margin: auto;
width: 1160px;
}

.petit-carré {


height: 30px;
width: 10px;
background-color: #651d1c;

}

.text-white {

font-family: 'Raleway', sans-serif;
color:rgb(209, 197, 197);

}

.padding-left {


padding-left: 20px;

}

.titre-central { 

font-size: 20px;
font-weight: 900;
background-color: #dbc2a4 ;
display: flex;
margin-right: 30px;
}

.fond-bloc-rouge {

height: 200px;
background-color: #782221;


}



footer {

width: 100%;

}

.social-icon > a > img {

height: 50px;
background-size: contain;
width: 50px;
transition: opacity .3s;

}

.social-icon:hover {
opacity: 0.8; /* Vous pouvez ajuster cette valeur selon vos préférences */
}




.logos {

display: flex;
justify-content: center;
flex-direction: row;
align-items: center; /* Centrer verticalement les éléments dans le conteneur */
padding-top: 40px;
margin: 0 auto; /* Centrer horizontalement les éléments dans leur conteneur */

}

.logos img {

max-width: 100%; /* Pour éviter que les images ne dépassent de leur conteneur */
margin: 0 5px; /* Ajoute un espace de 5 pixels à gauche et à droite de chaque image */

}

.last-text {

text-align: center;
/* justify-content: center; */
padding-top: 20px;
color:rgb(209, 197, 197);


}

.trait-rouge:hover {

border-right: 22px solid #6d071a; /* Ajoute un trait bordeaux de 3 pixels à droite de l'élément survolé */
transition: border-right 0.3s; /* Ajoute une transition fluide pour une animation lors du survol */


}

.center-text {
text-align: center;
}

.mail ,
.adresse ,
.telephone  {
text-decoration: none; 
}

.mail  :hover,
.adresse  :hover,
.telephone   :hover{
text-decoration: underline; 
}



</style>