const discord = require('discord.js')
const client = new discord.Client()
const hd = require('./humanize-duration')

client.on('ready' , ()=>{
console.log(hd(client.uptime+1005*5))
})
