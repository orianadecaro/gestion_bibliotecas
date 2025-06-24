describe("Crear préstamo desde el modal", () => {
    before(() => {
        // Paso 1: login por UI
        cy.visit("https://gestion-bibliotecas-psi.vercel.app/");

        cy.get("button")
            .filter(':visible')
            .first()
            .click();

        cy.get("input[placeholder='Email']", { timeout: 5000 })
            .should("be.visible")
            .type("admin@email.com");

        cy.get("input[placeholder='Password']")
            .should("be.visible")
            .type("123456");

        cy.get("button")
            .contains("Ingresar")
            .click();

        // Verifica que estés en dashboard
        cy.url().should("include", "/admin/dashboard");

        // Paso 2: Guardar token de localStorage (ajusta la key según tu app)
        cy.window().then((win) => {
            const token = win.localStorage.getItem("token"); // <--- cambiar "token" por la key real
            expect(token).to.exist;

            // Guardamos el token para usarlo luego
            cy.wrap(token).as("token");
        });
    });


});
