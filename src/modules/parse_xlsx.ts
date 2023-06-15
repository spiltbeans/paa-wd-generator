const getClientInfo = async () => {
	// var workbook_read = xlsx.readFile(info_sheet_name);
	let data = {}

	// for (let cell in workbook_read.Sheets['Infos']) {
	// 	if (cell.charAt(0) === 'C' && cell !== 'C1') {
	// 		let num = cell.substring(1, cell.length)
	// 		data[workbook_read.Sheets['Infos'][cell]?.w] = {
	// 			'contact_label': workbook_read.Sheets['Infos'][`D${num}`]?.w,
	// 			'contact_name': workbook_read.Sheets['Infos'][`H${num}`]?.w,
	// 		}
	// 	}
	// }
	return data
}