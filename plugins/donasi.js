let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [085609467937]
│ •  [085609467937]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
