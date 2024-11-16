import { Cell } from "./Cell"

export type Row =
	| {
			RowType: "Section"
			Title: string
			Rows: Row[]
	  }
	| {
			RowType: "SummaryRow"
			Cells: Cell[]
	  }
	| {
			RowType: "Row"
			Cells: Cell[]
	  }
	| {
			RowType: "Header"
			Cells: Cell[]
	  }
