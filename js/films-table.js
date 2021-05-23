const films = [
    {
        start: '10:00',
        title: 'Человек-паук',
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
        start: '12:00',
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
        start: '14:00',
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
        start: '16:00',
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

for (let index = 0; index < films.length; index++) {
    tableBody.innerHTML += `
<tr>
                    <td class="grey"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z"
                                fill="white" />
                        </svg>
                    </td>
                    <td>${films[index].start}</td>
                    <td>${films[index].title}</td>
                    <td>${films[index].genre.map(g => g.name)}</td>
                </tr>
`;
}