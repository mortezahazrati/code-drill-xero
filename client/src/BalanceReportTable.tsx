import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@mui/material"

import { Report } from "./types"
import { CollapsibleTableSection } from "./CollapsibleTableSection"

interface BalanceReportTableProps {
	reports: Report[]
}

export function BalanceReportTable({ reports }: BalanceReportTableProps) {
	const report = reports[0]

	return (
		<TableContainer component={Paper}>
			<Table aria-label="spanning table">
				<TableHead
					sx={{
						backgroundColor: "primary.main",
						color: "common.white"
					}}
				>
					<TableRow>
						{report.ReportTitles.map((title: string) => (
							<TableCell
								width="25%"
								sx={{ border: 1 }}
								key={title}
								align="center"
							>
								{title}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{report.Rows.map((row, index) => {
						switch (row.RowType) {
							case "Header": {
								const { Cells } = row
								console.log(Cells)
								return (
									<TableRow key={row.RowType + +index}>
										{Cells.map(cell => (
											<TableCell sx={{ border: 1 }} key={cell.Value}>
												{cell.Value}
											</TableCell>
										))}
									</TableRow>
								)
							}
							case "Section": {
								if (row.Rows?.length === 0) {
									return (
										<TableRow
											sx={{
												backgroundColor: "primary.light",
												color: "common.white"
											}}
											key={row.RowType + index}
										>
											<TableCell align="center" colSpan={3} sx={{ border: 1 }}>
												{row.Title}
											</TableCell>
										</TableRow>
									)
								}
								return <CollapsibleTableSection sectionData={row} />
							}
						}
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
