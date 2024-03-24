
const arrCards = [
    {
        name: 'vue',
        Image: './assets/images/vue.svg'
    },
    {
        name: 'anguler',
        Image: './assets/images/angular.svg'
    },
    {
        name: 'ember',
        Image: './assets/images/ember.svg'
    },
    {
        name: 'react',
        Image: './assets/images/react.svg'
    },
    {
        name: 'aurelia',
        Image: './assets/images/aurelia.svg'
    },
    {
        name: 'backbone',
        Image: './assets/images/backbone.svg'
    },
    {
        name: 'vue',
        Image: './assets/images/vue.svg'
    },
    {
        name: 'anguler',
        Image: './assets/images/angular.svg'
    },
    {
        name: 'ember',
        Image: './assets/images/ember.svg'
    },
    {
        name: 'react',
        Image: './assets/images/react.svg'
    },
    {
        name: 'aurelia',
        Image: './assets/images/aurelia.svg'
    },
    {
        name: 'backbone',
        Image: './assets/images/backbone.svg'
    }
];

//sort cartArr randomly
arrCards.sort(() => 0.5 - Math.random());
// display cards
arrCards.forEach(arrCard => {
    grid.innerHTML += ` <div class="memory-card flip" data-fram="${arrCard.name}">
    <img src="${arrCard.Image}" class="front-face">
    <img src="./assets/images/js-badge.svg" class="back-face">
    </div>`;
}); 

