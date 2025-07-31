import './../login/login.cy'

describe('search by cif', () => {
    beforeEach(() => {
        cy.login()
    })

    it('should search successfully with valid CIF', () => {
        // Visit LEGSCST200 page
        cy.visit('http://sitdev.dyndns.org:9185/#/LEGSCST200')
        cy.screenshot();

        cy.get('input[name="cifNumber"]').type('750590586')
        cy.screenshot();

        // search button
        cy.get('button[type="submit"][aria-describedby=":ru:"].btn.btn-light-info').click()

        // view detail button
        cy.get('button[aria-describedby=":r15:"]', { timeout: 30000 }).click()

        cy
            .get('input[placeholder="ประเภทลูกค้า"]')
            // .should('have.value', 'นิติบุคคล')
            .should('have.value', 'บุคคลธรรมดา')
            .then(() => {
                // cy.get('div[aria-labelledby=":r18:"]').screenshot( );
                cy.log(' ===== successfully ลูกค้าเป็นบุคคลธรรดา ====');
            }, (error) => {
                cy.log(' ===== fail ลูกค้าเป็นบุคคลธรรดา ====')
                throw error;
            })

        // cy.get('div.ant-modal-content', { timeout: 6000 }).screenshot();
        cy.get('div[aria-labelledby=":r18:"]', { timeout: 6000 }).screenshot();
    })
})
