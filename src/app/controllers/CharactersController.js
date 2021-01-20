import apiMarvel from '../services/apiMarvel';

const apiKey = 'characters?apikey=ad318f72becf23070f4b01a79ad99dae&hash=da7ffd1c15cf1c1f7e28a09f162837e4&ts=1609890812920';




class CharactersController {

    async index(req, res) {
        let { pagina, registros } = req.query;

        let offset = 0;

        if (pagina && pagina > 1) {
            offset = ((pagina - 1) * registros) + 1;
        }

        try {
            await apiMarvel.get(`${apiKey}&limit=${registros}&offset=${offset}`)
                .then(response => {

                    return res.json(response.data);

                });
        } catch (error) {

            return res.status(error.status || 400).json(error);

        }
    }

    async show(req, res) {
        const { id } = req.params;
        console.log(id);


        try {

            await apiMarvel.get(`${apiKey}&id=${id}`).then(response => {

                return res.json(response.data);

            });
        } catch (error) {

            return res.status(error.status || 400).json(error);

        }
    }

    setPagination(totalItens) {
        const paginas = Math.ceil(totalItens / registrosPorPage);
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