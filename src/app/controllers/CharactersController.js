import apiMarvel from '../services/apiMarvel';

const apiKey = 'characters?apikey=ad318f72becf23070f4b01a79ad99dae&hash=da7ffd1c15cf1c1f7e28a09f162837e4&ts=1609890812920';


const rPP = 50;

class CharactersController {

    async index(req, res) {
        const { pagina } = req.query;

        let offset = 0;

        if (pagina && pagina > 1) {
            offset = ((pagina - 1) * rPP) + 1;
        }

        try {
            await apiMarvel.get(`${apiKey}&limit=${rPP}&offset=${offset}`).then(response => {

                console.log("primeiro resultado", response.data.data.total);


                return res.json(response.data);
            });
        } catch (error) {
            return res.status(error.status || 400).json(error);
        }
    }

    async show(req, res) {
        try {
            console.log('entrou');
            const { id } = req.params;
            const { data } = await apiMarvel.get(`
                        ${apiKey}&id=${id}
                        `);

            return res.json(data);
        } catch (error) {
            return res.status(error.status || 400).json(error);
        }
    }

    setPagination(totalItens) {
        const paginas = Math.ceil(totalItens / rPP);
        console.log(paginas, totalItens);
        for (let i = 1; i <= paginas; i++) {
            const li = ` <
                        li class = "page-item" >
                        <
                        a class = "page-link"
                        href = "#"
                        data - page = "${i}" > $ { i } < /a> <
                        /li>
                        `
            document.querySelector('.pagination').innerHTML += li;
        }

        document.querySelectorAll('.page-link').forEach((el) => {
            el.onclick = (event) => this.trocarPagina(event);
        });
    }
}

export default new CharactersController();