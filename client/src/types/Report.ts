import { Row } from "./Row"

export type Report = {
	ReportID: string
	ReportName: string
	ReportType: string
	ReportTitles: string[]
	ReportDate: string
	UpdatedDateUTC: string
	Fields: never[]
	Rows: Row[]
}
