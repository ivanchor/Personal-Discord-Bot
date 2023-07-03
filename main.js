const Discord = require('discord.js')

const client = new Discord.Client(
    {
        intents: 
        [
            Discord.GatewayIntentBits.Guilds,
            Discord.GatewayIntentBits.GuildMessages,
            Discord.GatewayIntentBits.MessageContent
        ],
    })

require('dotenv/config')

client.login(process.env.TOKEN)

const prefix = '!'
client.commands = new Discord.Collection();

/*
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>
{
    require(`./handlers/${handler}`)(client, Discord)
})
*/

const fs = require('fs')


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles)
{
    const command = require(`./commands/${file}`)
     
    client.commands.set(command.name, command, Discord)
}


//node .
client.on('ready', () =>
{
    console.log("Bot is Online")
})

client.on('messageCreate', message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    switch(command)
    {
        case ('hello'):
            client.commands.get('hello').execute(message, args)
            break
        case('repeat'):
            client.commands.get('repeat').execute(message, args)
            break
        case('event'):    
            client.commands.get('event').execute(message, args, Discord)
            break
    }
})
