let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f450a1b9d20d82a5ed062.jpg'
let sewa = `
╔━━━『 *Quotes Menu* 』
┠ ✑ .bacot
┠ ✑ .bucin
┠ ✑ .dare
┠ ✑ .galau
┠ ✑ .gombal
┠ ✑ .hacker
┠ ✑ .q-islam
┠ ✑ .quotes
┠ ✑ .katabijak
┠ ✑ .motivasi
┠ ✑ .pantun
┠ ✑ .senja
┠ ✑ .truth
┠ ✑ .videoquotes
┠ ✑ .videogalau
╚━━━━━━━━━━━━✧
 _©YukiBot_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['quotesmenu']
handler.tags = ['main']
handler.command = /^(quotesmenu)$/i

export default handler