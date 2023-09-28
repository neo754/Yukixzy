let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f450a1b9d20d82a5ed062.jpg'
let sewa = `
╔━━━『 *Game Menu* 』
┠ ✑ .caklontong
┠ ✑.family100
┠ ✑ .iqtest
┠ ✑ .math
┠ ✑ .siapakahaku
┠ ✑ .suit
┠ ✑ .susunkata
┠ ✑ .tebakanime
┠ ✑ .tebakbendera
┠ ✑ .tebakchara
┠ ✑ .tebaksurah
┠ ✑ .tekateki
┠ ✑ .tebakkata
┠ ✑ .tictactoe
┠ ✑ .ttt
┠ ✑ .fightkucing
┠ ✑ .hunter
┠ ✑ .attack
┠ ✑ .atk
┠ ✑ .war
╚━━━━━━━━━━━━✧
 _© YukiBot_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['gamemenu']
handler.tags = ['main']
handler.command = /^(gamemenu)$/i

export default handler