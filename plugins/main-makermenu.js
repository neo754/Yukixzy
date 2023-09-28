let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f450a1b9d20d82a5ed062.jpg'
let sewa = `
╔━━━『 *Maker Menu* 』
┠ ✑ .flaming1 <text>
┠ ✑ .flaming4 <text>
┠ ✑ .agedetect
┠ ✑ .logo-coffee <text>
┠ ✑ .butterfly <text>
┠ ✑ .carved-wood <text>
┠ ✑ .iluminated <text>
┠ ✑ .flaming2 <text>
┠ ✑ .flaming3 <text>
┠ ✑ .flaming5 <text>
┠ ✑ .flaming6 <text>
┠ ✑ .carved <text>
┠ ✑ .shadowsky <text>
┠ ✑ .pictlove <text>
┠ ✑ .tahta <teks>
┠ ✑ .hornycard
┠ ✑ .hornylicense
┠ ✑ .itssostupid
┠ ✑ .kaneki
┠ ✑ .loliggo
┠ ✑ .nekosad
┠ ✑ .nekosad
┠ ✑ .simpcard
┠ ✑ .ytcomment
┠ ✑ .ytkomen
╚━━━━━━━━━━━━✧

 _©YukiBot_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['makermenu']
handler.tags = ['main']
handler.command = /^(makermenu)$/i

export default handler