const { Client, Message } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Xem avatar của người nào đó",
    aliases: ['av', 'avt'],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute (client, message, args) {
        let mention = message.mentions.members.first();

        let user = args[0] || message.author.id;
        if(mention) user = mention.user.id;

        let member = message.guild.members.cache.get(user);

        if(!member) return message.reply({content: "User không hợp lệ", allowedMentions: {repliedUser: false}});

        message.reply({embeds: [{
            author: {
                name: "Avatar của " + member.user.tag +"'s",
            },
            image: {
                url: member.user.displayAvatarURL({ size: 4096, format: "png"})
            },
            color: "BLUE"
        }], allowedMentions: { repliedUser: false }});
    }
}