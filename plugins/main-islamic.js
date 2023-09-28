let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f450a1b9d20d82a5ed062.jpg'
let sewa = `
╔━━━『 *Islamic Menu* 』
┠ ✑ .asmaulhusna
┠ ✑ .ayatkursi
┠ ✑ .salat <daerah>
┠ ✑ .niatsholat
╚━━━━━━━━━━━━✧
 _© YukiBot_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['islamic']
handler.tags = ['main']
handler.command = /^(islamic)$/i

export default handler