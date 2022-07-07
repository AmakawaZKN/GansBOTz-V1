const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: namabot, 
   }
   }
   }
let handler = async (m, { conn, command }) => {
let kntol = `https://zahirr-web.herokuapp.com/api/random/meme?apikey=zahirgans`
    conn.sendButtonImg(m.chat, kntol, 'Nih', ownername, 'Next', `.${command}`, fdoc) 
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i

module.exports = handler