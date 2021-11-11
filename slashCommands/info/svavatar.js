const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "svavatar",
    description: "Xem avatar user trong server",
    type: "Chat_INPUT",
    options: [
        {
            name: "user",
            type: "USER",
            description: "User bạn muốn xem",
            required: false
        }
    ],

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    async execute(client, interaction) {
        let member = interaction.options.getMember("user") || interaction;
        
        if(!member.avatar) return interaction.reply({
            content: "User này chưa có server avatar!"
        })

        await interaction.reply({embeds: [{
            author: {
                name: "Avatar của " + member.user.tag +"'s",
            },

            image: {
                url: `https://cdn.discordapp.com/guilds/${interaction.guildId}/users/${member.user.id}/avatars/${member.avatar}.png?size=4096`
            },
            color: "BLUE",
            timestamp: new Date()
        }], allowedMentions: { repliedUser: false }});

    }
}