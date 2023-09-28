let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f450a1b9d20d82a5ed062.jpg'
let sewa = `
╔━━━『 *Main Menu* 』
┠ ✑ .ai
┠ ✑ .openai
┠ ✑ .sewa
┠ ✑ .simi
┠ ✑ .bannedlist
┠ ✑ .botstatus
┠ ✑ .owner
┠ ✑ .creator
┠ ✑ .listgc
┠ ✑ .ping
┠ ✑ .report
┠ ✑ .request
┠ ✑ .rules
┠ ✑ .runtime
┠ ✑ .sewa
┠ ✑ .sewa
┠ ✑ .server
┠ ✑ .totalfitur
┠ ✑ .tqto
┠ ✑ .user
┠ ✑ .afk
┠ ✑ .ceksn
┠ ✑ .daftar
┠ ✑ .register
┠ ✑ .fakespam
┠ ✑ .botstatus
┠ ✑ .menfess
┠ ✑ .menu
┠ ✑ .menu2
┠ ✑ .unregister
┠ ✑ .profile
┠ ✑ .store
╚━━━━━━━━━━━━✧
 _©YukiBot_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['mainmenu']
handler.tags = ['main']
handler.command = /^(mainmenu)$/i

export default handler