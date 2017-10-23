import Helmet from "react-helmet";

export default ({template, html, error}) => {



    const helmet = Helmet.renderStatic();

    const errorHtml = error
        ? `<div id="server-error"><h1>Server Error</h1><pre>${error.stack || error}</pre></div>`
        : '';

    return template
        .replace(
            `<div id="root"></div>`,
            `${errorHtml}<div id="root">${html}</div>`
        )
        .replace(
            /<title>.*?<\/title>/g,
            helmet.title.toString()
        )
        .replace(
            /<link \/>/g,
            helmet.link.toString()
        )
        .replace(
            /<html>/g,
            '<html ' + helmet.htmlAttributes.toString() + '>'
        );

};