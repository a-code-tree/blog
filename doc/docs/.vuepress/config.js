// 参考文档《VuePress》 https://v2.vuepress.vuejs.org/zh/
module.exports = {
    "title": "一棵编程树文档",
    "description": " ",
    // "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                // "href": "./images/cib.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    // "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "首页",
                "link": "/",
            },
            {
                "text": "环境信息",
                "link": "/env",
            },
            {
                "text": "环境信息",
                "link": "/env",
            }

        ],

        "type": "wiki",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "lixiaowei",
        "startYear": "2023"
    },
    "markdown": {
        "lineNumbers": true
    },

    plugins: [
        'mermaidjs', 'fulltext-search','@vuepress/blog'
    ]


}
