let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f450a1b9d20d82a5ed062.jpg'
let sewa = `
╔━━━『 *Sticker Menu* 』
┠ ✑ .attp <teks>
┠ ✑ .bonk
┠ ✑ .getexif
┠ ✑ .qc
┠ ✑ .sticker
┠ ✑ .s
┠ ✑ .toimg
┠ ✑ .tovideo
┠ ✑ .ttp2
┠ ✑ .ttp
┠ ✑ .wm
╚━━━━━━━━━━━━✧
 _©YukiBot_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['stikermenu']
handler.tags = ['main']
handler.command = /^(stikermenu)$/i

export default handler