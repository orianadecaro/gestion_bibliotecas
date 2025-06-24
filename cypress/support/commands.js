// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
    const token = "TOKEN_VALIDO_AQUI"; // ⚠️ Usá un token JWT real o generado para pruebas
    const user = {
        id: 1,
        nombre: "Oriana",
        email: "orianadecaro@correo.com",
        rol: "administrador", // solo si lo usás en tu app
    };

    window.localStorage.setItem("token", token);
    window.localStorage.setItem("user", JSON.stringify(user));
});
