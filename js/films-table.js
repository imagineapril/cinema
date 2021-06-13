const filmsData = [
    {
        title: 'XXL',
        adult: true,
        genre: []
    },{
        title: 'Человек-паук',
        adult: false,
        genre: [
            {
                name: 'Фантастика',
            },
            {
                name: 'боевик',
            },
            {
                name: 'приключения',
            },
        ]
    }, {
        title: 'XXXL',
        adult: true,
        genre: []
    },{
        title: 'Собачья жизнь 2',
        genre: [
            {
                name: 'Фэнтэзи',
            },
            {
                name: 'драма',
            },
            {
                name: 'комедия',
            },
        ]
    }, {
        title: 'История игрушек 4',
        genre: [
            {
                name: 'Мультфильм',
            },
            {
                name: 'фэнтэзи',
            },
            {
                name: 'комедия',
            },
        ]
    }, {
        title: 'Люди в чёрном: Интэрнэшнл',
        genre: [
            {
                name: 'Фантастика'
            },
            {
                name: 'боевик'
            },
            {
                name: 'комедия'
            },
        ]
    }
];

const tableBody = document.getElementById('block2-table-body');
tableBody.innerHTML = ``;

for (let index = 0; index < filmsData.length; index++) {
        const film = new Film(filmsData[index]);

        console.log(film)
        if (film.isNotForAdult())    {
            tableBody.innerHTML += film.renderFilmTableItem();
    }
}