const blockFilmsWrapper = document.getElementById('block05-films-wrapper');
blockFilmsWrapper.innerHTML = '';

const kinopoiskapiunofficialRequest = (url) =>  {
    return fetch(url,   {
        headers:    {
            'accept': ' application/json',
            'X-API-KEY': 'fbaf4031-6143-4abb-89a0-f3b6cae1cd45',
        },
        cors: 'no-cors',
    });
}

const topFilmsRequest = () =>   {
    return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1')
}
const filmDetailsRequest = (id) =>    {
    return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}')
}

function renderFilmBlock(posterUrl, filmName)  {
    const wrapper = document.createElement('div');
    wrapper.classList.add('block05__movie1'); 
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('block-05__bg');
    const img = document.createElement('img');
    img.src = posterUrl;
    img.alt = 'Изображение постера';

    imgWrapper.append(img);

    const shadow = document.createElement('div');
    shadow.classList.add('block05_shadow');

    const descrWrapper = document.createElement('div');
    descrWrapper.classList.add('block05__descr');

    const title = document.createElement('div');
    title.classList.add('block05__text2');
    title.textContent = filmName;

    const descr = document.createElement('div');
    descr.classList.add('block05__text3');

    descrWrapper.append(title, descr);
    wrapper.append(imgWrapper, shadow, descrWrapper); 

    return [wrapper, descr];

}

const fetchBlockFilms = async () =>   {
    const result = await topFilmsRequest();
    const { films } = await result.json();

    const requests = [];
    const filmBlocksMap = new Map();

    films.forEach((film) =>    {
        const [filmLayout, descr] = renderFilmBlock(film.posterUrlPreview, film.nameRu);
        filmBlocksMap.set(film.filmId, filmLayout)

        requests.push(new Promise(async (resolve, reject) => {
            const detailResult = await filmDetailsRequest(film.filmId);
            const detailsData = await detailResult.json();
            const description = detailsData.data.description;
            
            if(!description)    {
            filmBlocksMap.delete(film.filmId);
        }   else    {
            descr.textContent = description;
        }

            resolve();
        }));
    })

    await Promise.all(requests);

    const elements = [...filmBlocksMap.values()].slice(0, 9);

    blockFilmsWrapper.append(...elements);
}

fetchBlockFilms();