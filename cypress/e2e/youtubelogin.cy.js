describe("Login the site", () => {
    it("Login", () => {
        cy.clearCookies
        cy.visit('https://www.youtube.com/', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
                'Accept-Language': 'en'
            },
            failOnStatusCode: false
        })
        cy.contains('Sign in').click()
        cy.origin('https://accounts.google.com/signin', () => {
            cy.visit('/challenge', { failOnStatusCode: false },)

            cy.get('[type="email"]').type('north.west2125@gmail.com')
            cy.get('#identifierNext').click()
            cy.get('[type="password"]').type('Gnarnia@25')
            cy.get('#passwordNext').click()
        })
        cy.visit('https://www.youtube.com/')
        cy.contains('Home').should('be.visible')

        cy.get('input[id="search').type('python for beginers')
        cy.get('#search-icon-legacy > yt-icon.style-scope').click()
        cy.get('.style-scope ytd-video-renderer:nth-child(3)').click()
        cy.get('#segmented-like-button').click()

    })
})