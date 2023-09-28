let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/222bada46ee6b67c5578f.jpg'
let sewa = `
╔━━━『 *Animanga Menu* 』
┠ ✑ .amv
┠ ✑ .animeinfo
┠ ✑ .charainfo
┠ ✑ .doujinsearch
┠ ✑ .doujindetail
┠ ✑ .doujinlatest
┠ ✑ .komikusearch
┠ ✑ .komikudetail
┠ ✑ .komikulatest
┠ ✑ .mangainfo
┠ ✑ .mangatoons
┠ ✑ .nhentaisearch
┠ ✑ .nhentaidetail
┠ ✑ .otakusearch
┠ ✑ .otakudetail
┠ ✑ .doujinlatest
┠ ✑ .ppcp
┠ ✑ .storyanime
┠ ✑ .whatanime
┃ ✑ .jadianime
┠ ✑ .gangbang
┠ ✑ .hinata
┠ ✑ .masturbation
┠ ✑ .orgy
┠ ✑ .wallpaperq <query>
╚━━━━━━━━━━━━✧

     © _YukiBot_ 
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['ainmanga']
handler.tags = ['main']
handler.command = /^(ainmanga)$/i

export default handler