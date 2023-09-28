let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f450a1b9d20d82a5ed062.jpg'
let sewa = `
╔━━━『 *AI Menu* 』
┠ ✑ .beauty
┠ ✑ .tocartoon
┠ ✑ .dalle
┠ ✑ .gpt
┠ ✑ .hairstyle
┠ ✑ .openai
┠ ✑ .ocr
┠ ✑ .pixardif
┠ ✑ .remini
┠ ✑ .color
┠ ✑ .hdr
┠ ✑ .toanime
┠ ✑ .txt2img
┠✑ .blur
╚━━━━━━━━━━━━✧
 _©YukiBot_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['aimenu']
handler.tags = ['main']
handler.command = /^(aimenu)$/i

export default handler