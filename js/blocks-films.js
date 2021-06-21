const blockFilmsWrapper = document.getElementById('block05-films-wrapper');
blockFilmsWrapper.innerHTML = '';

const apiHeaders = {
    'accept': ' application/json',
    'X-API-KEY': 'fbaf4031-6143-4abb-89a0-f3b6cae1cd45',
}


fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',   {
    headers:    {
        ...apiHeaders
    },
    cors: 'no-cors'
})
.then(data => data.json())
.then(data => {
    data.films.forEach((film) => {
        const id = `blocks-film-desc-${film.filmId}`;
        blockFilmsWrapper.innerHTML += `
            <div class="block05__movie1">
                <div class="block-05__bg">
                    <img src="${film.posterUrlPreview}" alt="">
                </div>
                <div class="block05_shadow"></div>
                <div class="block05__descr">
                    <div class="block05__text2">${film.nameRu}</div>
                    <div id="${id}" class="block05__text3">...loading</div>
                </div>
            </div>
        `
          fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}', {
            headers:    {
                ...apiHeaders
            },
            cors: 'no-cors'

        })
        .then(data => data.json())
        .then(({ data: { description } }) =>    {
        const desc = document.getElementById(id);
        desc.innerText = description;

        if(!description)    {
            const root = desc.parentNode.parentNode
            blockFilmsWrapper.removeChild(root);
        }

        })
    })
})