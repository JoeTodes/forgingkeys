module.exports = {
    title: 'FORGING KEYS',
    description: 'A Keyforge Blog',

    markdown: {
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        displayAllHeaders: false,
        sidebar: [

            '/articles/predictions-for-worlds-collide',
            '/articles/tips-and-tricks-for-competitive-gameplay',
            '/articles/keyforge-for-magic-players',
            '/articles/tempo-and-mulligans',
            '/articles/playing-to-the-board-state',
            '/articles/buying-yourself-another-turn',
            "/articles/giving-your-deck-a-chance",
            '/articles/the-hard-lock',
            '/articles/doing-as-much-as-you-can',
            '/articles/testing-out-the-card-viewer'
        ]
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