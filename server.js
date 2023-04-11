const express = require("express");
import React from "react";
import { renderToString } from 'react-dom/server';

const app = express();

app.get('/*', (req, res) => {
    const ReactApp = renderToString(
        <h1>Hello from the server!</h1>
    );

    return res.send(`
        <html>
            <body>
                <div id="root>${ReactApp}</div>
            </body>
        </html>
    `);
});

app.listen(8000, () => {
    console.log("Running on port 8000");
})