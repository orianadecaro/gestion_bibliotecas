describe("Crear préstamo desde el modal", function () {
    before(function () {
        // Login para obtener token
        cy.request({
            method: "POST",
            url: "https://gestion-bibliotecas-psi.vercel.app/login", // Cambia esta URL al endpoint real de login
            body: {
                email: "orianadecaro@gmail.com",
                password: "123456",
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Guardamos el token para usarlo en el test
            this.token = response.body.token; // Ajusta según estructura real del response
        });
    });

    it("debería crear un préstamo correctamente", function () {
        // Inyectamos el token en localStorage antes de cargar la página
        cy.visit("https://gestion-bibliotecas-psi.vercel.app/admin/lending", {
            onBeforeLoad(win) {
                win.localStorage.setItem("token", this.token);
            },
        });

        cy.contains("agregar", { matchCase: false }).click();
        cy.get("form").should("be.visible");

        cy.get('select[name="libro_id"]').select("1"); // Cambia por ID válido
        cy.get('select[name="socio_id"]').select("1"); // Cambia por ID válido

        cy.get('input[name="fechaprestamo"]').type("2024-06-01");
        cy.get('input[name="fechadevolucion"]').type("");

        cy.get('select[name="estado"]').select("Prestado");
        cy.get("form").submit();

        cy.get("form").should("not.exist");
        cy.contains("Prestado").should("exist");
    });
});
