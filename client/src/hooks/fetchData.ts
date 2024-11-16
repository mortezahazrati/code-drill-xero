import { useEffect, useState } from "react"
import { Report } from "../types"

// This is the recommended way of doing fetch data in react apps
// as per react team's page here: https://react.dev/learn/reusing-logic-with-custom-hooks#when-to-use-custom-hooks
export function useFetchData(url: string) {
	const [data, setData] = useState<{ Status: string; Reports: Report[] }>({
		Status: "",
		Reports: []
	})
	useEffect(() => {
		if (url) {
			let ignore = false
			try {
				fetch(url)
					.then(response => response.json())
					.then(json => {
						if (!ignore) {
							setData(json)
						}
					})
				return () => {
					ignore = true
				}
			} catch (error) {
				setData({ Status: "NOT-OK", Reports: [] })
				console.log(error)
			}
		}
	}, [url])
	return data
}
