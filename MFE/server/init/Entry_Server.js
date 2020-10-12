import express from 'express';
import redirect from './Index';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import getStore from '../store/Store_Server';
import {Provider} from 'react-redux';
import Route from '../../common/router/Route';
import React from 'react';
import proxy from 'express-http-proxy';

const server = express();


server.use('/api', proxy(`${process.env.GO_SERVICE_BASE_URL}`));

/* treate a 'public' directory to be available into a outside world which can be consumed by browser
   Because of this, the bundle.js will be consumed from 'public' folder not from 'build' folder
*/
server.use(express.static('public'));


server.get('*', (req, res) => {
    const store = getStore(req);
    
    const promishes = matchRoutes(Route, req.path).map(({ route }) => {return route.loadData ? route.loadData(store) : null;}).map(promise => {if(promise){return new Promise((resolve, reject) => {promise.then(resolve).catch(resolve);});}});

    Promise.all(promishes).then(() => {
        
        const context = {};
        const htmlContent = renderToString(<Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Route)}</div>
            </StaticRouter>
         </Provider>);
        const content = redirect(htmlContent, store, req);

         if(context.url){
            return res.redirect(301, context.url);
         }
         
         if(context.notFound){
             res.status(404);
         }

         if (res.statusCode !== 200) {
            res.set('Surrogate-Control', 'no-cache, no-store, must-revalidate');
        }

         res.send(content);       
    });
})


server.listen(`${process.env.SERVER_PORT}`, () => {
    console.log(`Server [${process.env.RUN_TIME_ENVIRONMENT}] is Listening on port ${process.env.SERVER_PORT}`);
})
