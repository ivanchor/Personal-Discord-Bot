const { EmbedBuilder } = require('discord.js');

module.exports =
{
    name: 'event',
    description: 'Creates an embed',
    execute(message, args, Discord)
    {
        const combine = args.join(' ')
        const split_comma = combine.split(',')

        if(split_comma.length != 3  || (combine.toString().match(/,/g) || []).length != 2)
        {
            message.channel.send("Format: Event Name, Location, Time")
            return;
        }
        
        const event_Name = split_comma[0]
        const event_Location = split_comma[1]
        const event_Time = split_comma[2]
        const user = message.author.username
        const pic = message.author.displayAvatarURL()

        const newEmbed = new Discord.EmbedBuilder()
        .setColor('#F8923A')
        //.setTitle(event_Name)
        //.setThumbnail('https://i.imgur.com/nY2Ez9v.png')
        //.setDescription('Embed description')
        .addFields
        (
            {name: 'Activity', value: event_Name},
            {name: 'Location', value: event_Location},
            {name: 'Time', value: event_Time},
        )
        .setFooter({text:user, iconURL: pic})

        message.channel.send({ embeds: [newEmbed] });
    }
    
}