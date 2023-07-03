module.exports = 
{
    name: 'repeat',
    description: 'Repeats user input',
    execute(message, args, Discord)
    {
        // Takes array 'args' and combines them into single string
        const output = args.join(' ')
        message.channel.send(output)
    }
}