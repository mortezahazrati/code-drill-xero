import { defineConfig } from "cypress"

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		// As I don't need a support file, setting this option to false
		supportFile: false
	}
})
