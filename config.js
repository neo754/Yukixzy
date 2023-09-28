//Sc by Yuki base Clara MD
//Di Tulis Ulang YukiXd
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285710677726', 'YukiXd', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '62857106777263' //Ganti
global.packname = '© Sticker by'
global.author = 'YukiXD'
global.namebot = 'YukiBot'
global.wm = '© YukiBot'
global.stickpack = '© Sticker by'
global.stickauth = 'YukiBot'
// Link Sosmed
global.sig = 'https://instagram.com/yuki_xzy55?igshid=OGQ5ZDc2ODk2ZA=='
global.sgh = 'https://chat.whatsapp.com/ILOsRz3Eb9j75clIlYBDUG'
global.sgc = 'https://chat.whatsapp.com/ILOsRz3Eb9j75clIlYBDUG'
// Donasi
global.psaweria = 'https://telegra.ph/file/ec1fc67a1023d046f843b.jpg'
global.ptrakterr = 'https://telegra.ph/file/ec1fc67a1023d046f843b.jpg'
// Info Wait
global.wait = 'Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'ClaraKeyOfficial'
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "ClaraKeyOfficial",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})