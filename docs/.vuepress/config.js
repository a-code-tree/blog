// 参考文档《VuePress》 https://v2.vuepress.vuejs.org/zh/
module.exports = {
    "title": "一棵编程树",
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
    // "theme": "vue-default",
    "themeConfig": {
        // 分类页面和标签页面
        categories: true,
        tags: true,
        "nav": [
            {
                "text": "首页",
                "link": "/",
            },
            {
                "text": "互联网热点",
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

