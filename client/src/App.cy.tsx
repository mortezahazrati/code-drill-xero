import React from "react"
import App from "./App"

describe("Home Page", () => {
	it("should show the homepage containing the balance report table", () => {
		cy.mount(<App />)

		cy.get('[data-test-id="balance-report-table"]').should("exist")
	})

	it("should show three columns in the table", () => {
		cy.mount(<App />)

		cy.get('[data-test-id="balance-report-table"] > thead > tr > th').should(
			"have.length",
			3
		)
	})
})
