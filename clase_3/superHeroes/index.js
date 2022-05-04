const superHeroes = [
    {
        name: 'Batman',
        publisher: 'DC Comics',
        alter_ego: 'Bruce Wayne',
        first_appearance: 'Detective Comics #27',
        characters: 'Bruce Wayne',
        sayHello: function () {
            return 'Hello, I am ' + this.name;
        }
    },
    {
        name: 'Superman',
        publisher: 'DC Comics',
        alter_ego: 'Kal-El',
        first_appearance: 'Action Comics #1',
        characters: 'Kal-El',
        sayHello: function () {
            return 'Hello, I am ' + this.name;
        }
    },
    {
        name: 'Linterna Verde',
        publisher: 'DC Comics',
        alter_ego: '',
        first_appearance: 'All-American Comics #16',
        characters: 'Green Lantern',
        sayHello: function () {
            return 'Hello, I am ' + this.name;
        }
    }
];

module.exports = superHeroes;