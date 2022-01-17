describe('Prueba', function(){
 before(function(){
    cy.visit('https://www.ilovepdf.com/es/comprimir_pdf');
 })
    it('subir archivo', ()=>{  
        const file ='ingles.pdf'
        cy.get('input').attachFile(file)
        cy.wait(1000)
        cy.get('#processTask').click()
        cy.wait(10000)
     })
    
 })

 