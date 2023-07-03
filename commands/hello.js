module.exports = 
{
    name: 'hello',
    description: 'A Greeting',
    execute(message, args, Discord)
    {
        const user = message.author.username

        message.reply("Hello " + user + "!")
    }
}