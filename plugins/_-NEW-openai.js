import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Mau Nanya Apa???`
let zeltoria = await fetch(`https://api.botcahx.live/api/search/openai-chat?text=${text}&apikey=AXreaUg6`)
let hasil = await zeltoria.json()
 m.reply(`${hasil.message}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['main']
handler.command = /^(ai|yuki|openai)$/i
export default handler