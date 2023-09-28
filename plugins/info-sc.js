let handler = async (m, { conn }) => {
let sewa = `
Script Private
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sc|script)$/i

export default handler