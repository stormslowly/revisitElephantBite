import {Provider} from 'react-redux'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'

import {configStore}  from '../shared/redux/stores/createStore'
import routes from '../shared/app/routers.jsx'
import {fetchComponentData} from './fetchData'

export function serverSideRender (req, res, next) {
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) {
      return res.status(404).end('Not found!');
    }
    const initialState = {};
    const store = configStore(initialState);

    var feReq = {
      params:renderProps.params,
      query:req.query
    }

    fetchComponentData(store, renderProps.components,feReq)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        const finalState = store.getState();

        res.render('index', {
          html: initialView,
          initialState: finalState
        })
      })
      .catch((err) => {
        next(err)
      });
  });
}

