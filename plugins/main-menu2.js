let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f450a1b9d20d82a5ed062.jpg'
let sewa = `*YukiBot* ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ꜱɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʙᴇʀʙᴀɢᴀɪ ᴛɪɴᴅᴀᴋᴀɴ, ᴍᴇɴᴄᴀʀɪ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴘᴘ.

┎╍▧〔 *List Menu* 〕
┠〆 *mainmenu*
┠〆 *aimenu*
┠〆 *groupmenu*
┠〆 *gamemenu*
┠〆 *rpgmenu*
┠〆 *stikermenu*
┠〆 *makermenu*
┠〆 *animanga*
┠〆 *nsfwmenu*
┠〆 *internet*
┠〆 *downloadmenu*
┠〆 *toolsmenu*
┠〆 *islamic*
┠〆 *quotesmenu*
┠〆 *random*
┠〆 *ownermenu*
┗━━━▧
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i
handler.register = false
export default handler