/// <reference types="cypress" />

context("Testing server api", () => {
	it("should return 404 for GET request to http://localhost:4000/", () => {
		cy.request({
			method: "GET",
			url: "http://localhost:4000/",
			failOnStatusCode: false
		}).should(response => {
			expect(response.status).to.eq(404)
		})
	})

	it("should return status OK 200 for GET to http://localhost:4000/balanceReport", () => {
		cy.request("http://localhost:4000/balanceReport").then(response => {
			expect(response).property("status").to.equal(200)
			expect(response).property("body").to.have.property("Status", "OK")
		})
	})

	it("should have Reports in the response", () => {
		cy.request("http://localhost:4000/balanceReport")
			.its("body")
			.its("Reports")
			.its("0") // yields the first element of the returned list
			.as("report")
			.then(function () {
				expect(this.report).property("ReportID").to.equal("BalanceSheet")
			})
			.then(function () {
				expect(this.report).property("ReportName").to.equal("Balance Sheet")
			})
			.then(function () {
				expect(this.report).property("Rows").to.be.a("array")
			})
	})
})
