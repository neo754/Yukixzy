let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.15.000
│ • *Permanen:* Rp.30.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.20.000
│ • *Permanen:* Rp.30.000
❏──────────────๑
❏──「 *Pembayaran* 」
│ • *Dana:* 0895360424437
│ • *QrisAllPayment:* Hub owner
❏──────────────๑
│ 📌 Hubungi Owner!!!
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|prem|premium)$/i

export default handler
