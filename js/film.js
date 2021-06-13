
// function Film(filmData) {
//     this.data = filmData;
//     this.start = `${toHour(getRandomToMax(14) + 9)}:${toMinutes(getRandomToMax(60))}`;
//     }



class Film {
    constructor(filmData) {
        this.data = filmData;
        this.start = `${toHour(getRandomToMax(14) + 9)}:${toMinutes(getRandomToMax(60))}`;
        this.id = filmData.id || filmData.title.replaceAll(' ', '-'); 
        
    }

    getID() {
       return this.id; 
    }

    getStart()   {
        return this.start;
    }

    getTitle()   {
        return this.data.title;
    }

    isNotForAdult()   {
        return !this.data.adult;
    }

    getID()   {
        return this.data.id || this.data.title.replaceAll(' ', '-');
    }

    getGenre()   {
        return this.data.genre
            .map(g => g.name)
            .join(', ');
    }

    renderFilmTableItem()   {
        return `
    <tr>
        <td>
            <input type="checkbox" id="${this.getID()}">
            <label for="${this.getID()}">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z"
                                fill="white" />
                </svg> 
            </label>
        </td>
        <td>${this.getStart()}</td>
        <td>${this.getTitle()}</td>
        <td>${this.getGenre()}</td>
    </tr>
`;
    }
}



