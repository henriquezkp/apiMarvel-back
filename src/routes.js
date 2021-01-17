import { Router } from 'express';
import logMid from './app/middlewares/logRequests';
import CharactersController from './app/controllers/CharactersController';

const routes = new Router();

routes.use(logMid);

routes.get('/', (req, res) => {
    res.send('Rota principal');
});

routes.get('/characters', CharactersController.index);
routes.get('/characters/:id', CharactersController.show);


export default routes;