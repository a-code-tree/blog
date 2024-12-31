// 参考文档《VuePress》 https://v2.vuepress.vuejs.org/zh/
module.exports = {
    "title": "一棵编程树",
    "description": "致力于通俗化解释专业化术语",
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
                "text": "项目",
                "link": "/project",
            },
            {
                "text": "Rust",
                "link": "/rust",
            },
            {
                "text": "English",
                "link": "/english",
            },
            {
                "text": "Go",
                "link": "/Go",
            },
            {
                "text": "Java",
                "link": "/Java",
            },
            {
                "text": "Typescript",
                "link": "/ts",
            },
            {
                "text": "Electron",
                "link": "/Electron",
            },

            {
                "text": "Tauri",
                "link": "/tauri",
            },
            {
                "text": "Tauri",
                "link": "/tauri",
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

