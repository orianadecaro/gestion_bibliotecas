describe("Crear préstamo desde el modal", () => {


    it("debería crear un nuevo socio correctamente", () => {
        // Aquí sí visitas la página protegida ya con sesión activa
        cy.visit("https://gestion-bibliotecas-psi.vercel.app/admin/socio");

        // Ahora pones los pasos para crear el socio
        // Ejemplo:
        cy.get("button").contains("Nuevo Socio").click();
        cy.get("input[name='nombre']").type("Juan Pérez");
        // ... resto del test
    });
});
