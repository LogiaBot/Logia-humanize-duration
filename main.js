const discord = require('discord.js')
const client = new discord.Client()
const hd = require('./humanize-duration')

client.on('ready' , ()=>{
console.log(hd(client.uptime+1005*5))
})
client.login('NzE3NzE2Mzk3OTI0Mjg2NTc0.XtpK7Q.VNNSUEPY0MIOFMvdCg_dAvK7Ig8')
