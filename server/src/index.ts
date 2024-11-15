import express, { Express, Request, Response } from "express"
import bodyParser from "body-parser"

const cors = require("cors")
const axios = require("axios")

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get("/balanceReport", async (req, res) => {
	try {
		const response = await fetch(
			"http://xero:3000/api.xro/2.0/Reports/BalanceSheet",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
		if (!response.ok) {
			throw new Error()
		}
		const data = await response.json()

		res.status(200).send(data)
	} catch (error) {
		console.log(error)
		res.status(500).send("An internal error has occurred")
	}
})

app.listen(4000, () => {
	console.log("Listening on 4000")
})
