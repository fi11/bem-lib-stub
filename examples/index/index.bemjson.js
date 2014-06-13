({
    block: 'page',
    head: [
        { elem: 'js', url: 'jquery-1.11.1.js' },
        { elem: 'js', url: 'http://yandex.st/es5-shims/0.0.1/es5-shims.min.js', ie: 'lt IE 9' },
        { elem: 'css', url: 'index.min.css' }
    ],
    'x-ua-compatible' : true,
    ie: false,
    content: [
        { block: 'block-hello' },
        { elem: 'js', url: 'index.min.js' }
    ]
})
