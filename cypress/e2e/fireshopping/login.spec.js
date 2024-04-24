/// <reference types="cypress" />

describe('Testeamos la aplicación de notas', () => {
    beforeEach (() => {
        cy.visit('http://localhost:3000')  
        cy.get('div.list-route').click()
    })
    it('Aparece texto si no estamos logueados', () => {
        const text = "Necesita estar Logeado para añadir nueva tarea"
        cy.contains(text)
    })
    it('No podemos escribir ni el titulo ni la descripción', () => {
        cy.get('input[placeholder="Título"]').should("be.disabled")
        cy.get('textarea[placeholder="Descripción"]').should("be.disabled")
        cy.get('button.btn.submit').should("be.disabled")
    })
    it('Estando logueados ver si los campos estan activos', () => {
        //Primero hacemos Login
        const email = "firebaseshopping@gmail.com"
        const password = "firebaseshopping@gmail.com"
        cy.contains('Login').click()
        cy.get('input[placeholder="Email"]').type(email)
        cy.get('input[placeholder="Password"]').type(password)
        cy.get('btn-submit').click()
        cy.contains('Inicio de sesión válido')  

        //Entra en la ruta del listado
        cy.get('div.list-route').click()
        cy.get('input[placeholder="Título"]').should("be.enabled")
        cy.get('textarea[placeholder="Descripción"]').should("be.enabled")
        cy.get('button.btn.submit').should("be.enabled")
    })
})


describe('Testeamos la gestion de usuarios', () => {
    beforeEach (() => {
        cy.visit('http://localhost:3000')
    })
    it('Se renderiza correctamente', () => {
        cy.contains('FireShopping')
    })
    it('Podemos acceder a la ruta de Login', () => {
        cy.contains('Este es el login').should('not.exist')
        cy.contains('Login').click()
        cy.contains('Este es el login')
    })
    it('Podemos acceder a la ruta de Registro', () => {
        const registerText = ("¡Registrate para poder incorporarte en FireShopping!")
        cy.contains(registerText).should('not.exist')
        cy.contains('o Registrate').click()
        cy.contains(registerText).should('exist')
    })
    it('Podemos Registrar un usuario', () => {
        const email = "firebaseshopping@gmail.com"
        const password = "firebaseshopping@gmail.com"
        cy.contains('o Registrate').click()
        cy.get('input[placeholder="Email"]').type(email)
        cy.get('input[placeholder="Password"]').type(password)
        cy.contains("Registrar").click()
        // cy.get('btn-submit').click()
        // cy.contains('Bienvenidos a FireShopping').should('exist')
    })
    it('Podemos iniciar sesión',() => {
        const email = "firebaseshopping@gmail.com"
        const password = "firebaseshopping@gmail.com"
        cy.contains('Login').click()
        cy.get('input[placeholder="Email"]').type(email)
        cy.get('input[placeholder="Password"]').type(password)
        cy.get('btn-submit').click()
        cy.contains('Inicio de sesión válido').should('exist')
    })
})


