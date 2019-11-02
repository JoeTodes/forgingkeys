module.exports = {
    title: 'FORGING KEYS',
    description: 'A Keyforge Blog',

    markdown: {
        anchor: {
            permalink: false
        }
    },
    plugins: [
        [
            "vuepress-plugin-disqus-comment",
            {
                shortname: 'forgingkeys'
            }
        ]
    ]

}