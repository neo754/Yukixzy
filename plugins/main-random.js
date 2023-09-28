let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f450a1b9d20d82a5ed062.jpg'
let sewa = `
╔━━━『 *Random Menu* 』
┠ ✑ .nekopoi
┠ ✑ .asupan
┠ ✑ .blackpink
┠ ✑ .bocil
┠ ✑ .bts
┠ ✑ .china
┠ ✑ .cosplay
┠ ✑ .geayubi
┠ ✑ .gensin
┠ ✑ .hentai
┠ ✑ .indonesia
┠ ✑ .japan
┠ ✑ .korea
┠ ✑ .malaysia
┠ ✑ .thailand
┠ ✑ .vietnam
╚━━━━━━━━━━━━✧
 _©YukiBot_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['random']
handler.tags = ['main']
handler.command = /^(random)$/i

export default handler