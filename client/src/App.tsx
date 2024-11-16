import "./App.css"
import { Box } from "@mui/material"

import { useFetchData } from "./hooks"
import { BalanceReportTable } from "./BalanceReportTable"
import { Report } from "./types"

function App() {
	const data: { Status: string; Reports: Report[] } = useFetchData(
		// TODO: store the server url in an env variable
		"http://localhost:4000/balanceReport"
	)

	return (
		<Box px={10}>
			<BalanceReportTable reports={data.Reports} />
		</Box>
	)
}

export default App
