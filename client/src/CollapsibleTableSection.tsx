import {
	Box,
	Collapse,
	IconButton,
	Table,
	TableCell,
	TableRow
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useState } from "react"
import { Row } from "./types/Row"

export function CollapsibleTableSection({
	sectionData
}: {
	sectionData: {
		Title: string
		Rows: Row[]
	}
}) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<TableRow
				onClick={() => setOpen(!open)}
				sx={{ "& > *": { borderBottom: "unset" } }}
			>
				<TableCell>
					<IconButton aria-label="expand row" size="small">
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell colSpan={5} component="th" scope="row">
					{sectionData.Title}
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ padding: 0 }} colSpan={3}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 0 }}>
							<Table size="small" aria-label="purchases">
								{sectionData.Rows.map(row => {
									if (row.RowType === "Row" && row.Cells.length !== 0) {
										const { Cells } = row

										return (
											<TableRow>
												{Cells.map((cell, cellIndex) => (
													<TableCell
														{...(cellIndex !== 0 ? { align: "right" } : {})}
														sx={{ border: 1 }}
													>
														{cell.Value}
													</TableCell>
												))}
											</TableRow>
										)
									}

									if (row.RowType === "SummaryRow") {
										const { Cells } = row

										return (
											<>
												{Cells.map((cell, cellIndex) => (
													<TableCell
														width="25%"
														{...(cellIndex !== 0 ? { align: "right" } : {})}
														sx={{ border: 1 }}
													>
														{cell.Value}
													</TableCell>
												))}
											</>
										)
									}
								})}
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	)
}
