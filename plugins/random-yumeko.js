import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.xyroinee.xyz/api/sfw/Yumeko?apikey=yukii`
	conn.sendFile(m.chat, url, '', '_Random Yumeko_', m)
}
handler.command = /^(yumeko)$/i
handler.tags = ['random']
handler.help = ['yumeko']
handler.limit = true
export default handler