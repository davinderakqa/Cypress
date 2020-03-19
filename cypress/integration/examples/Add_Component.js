/// <reference types="Cypress" />

describe('My first test suite', function() {

     it('AEM Page Creation', function() {
          cy.createPage()

          cy.title().should('eq', 'New Homepage')
          cy.wait(4000)
          cy.screenshot()
          cy.get('.cq-Overlay[data-text="Drag components here"]').click()
          cy.get('button[title="Insert component"]').click()
          cy.get('.coral3-SelectList-item').each(($e1, index, $list)=> {
               if($e1.text()==="Geo Banner") {
                    $e1.click()
               }
          })
          cy.reload()
          cy.wait(4000)
          cy.screenshot()
          cy.get('div[title="Geo Banner"]').first().dblclick()
          cy.get('.coral3-Dialog-wrapper > .coral-Form--vertical > .coral3-Dialog-header > .coral3-Dialog-title > .cq-dialog-header > .cq-dialog-actions > .cq-dialog-submit').click({force:true}) 
          cy.screenshot()
     })
})