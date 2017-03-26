const fs = require('fs');

import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as path from 'path';
import * as express from 'express';


// Angular 2
import { enableProdMode } from '@angular/core';
import { AppNodeModuleNgFactory } from './aot/src/app/app.node.module.ngfactory'
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ngExpressEngine } from './express-engine';

// enable prod for faster renders
enableProdMode();

const app = express();

const ROOT = path.join(path.resolve(__dirname));
let pageCache = new Map();
// Express View
app.engine('.html', ngExpressEngine({ aot: true, bootstrap: AppNodeModuleNgFactory }));

app.set('views', path.join(ROOT));
app.set('view engine', 'html');
app.get('/ping', (req, res) => {
    res.status(200).send('ok');
});
app.get('*', (req, res) => {
    // res.render('index', { req });
    let url = req.originalUrl || '/';

    let html = pageCache.get(url);
    if (html !== undefined) {
        res.setHeader('Cache-Control', 'public, max-age=300');
        res.status(200).send(html);
        return;
    }

    res.render('index', {
        req,
        res,
    }, (err, html) => {
        console.log(err)
        pageCache.set(url, html);
        res.status(200).send(html);
    })
});


module.exports = app;
