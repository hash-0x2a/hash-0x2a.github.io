/* global hexo */
'use strict';

// 在生成的 HTML 的 </head> 前注入自定义样式表
hexo.extend.filter.register('after_render:html', function (html) {
    if (html.includes('/css/footer.css')) {
        return html;
    }
    return html.replace('</head>', '<link rel="stylesheet" href="/css/footer.css"></head>');
});
