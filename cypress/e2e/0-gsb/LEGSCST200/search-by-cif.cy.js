import './../login/login.cy'

describe('search by cif', () => {
    beforeEach(() => {
        cy.login()
    })

    it('should search successfully with valid CIF', () => {
        // Visit LEGSCST200 page
        cy.visit('http://sitdev.dyndns.org:9185/#/LEGSCST200')

        cy.get('input[name="cifNumber"]').type('750590586')

        // search button
        cy.get('button[type="submit"][aria-describedby=":ru:"].btn.btn-light-info').click()

        // view detail button
        cy.get('button[aria-describedby=":r15:"]', { timeout: 30000 }).click()

        cy.get('input[placeholder="ประเภทลูกค้า"]')
            .should('have.value', 'บุคคลธรรมดา')
            .then(() => {
                cy.log(' ===== ค้นหาบุคคลธรรมดา Test Result Successfully completed ====')
            })
    })
})
