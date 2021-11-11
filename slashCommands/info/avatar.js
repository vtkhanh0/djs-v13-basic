const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Xem avatar của mình hoặc người khác",
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
        
        await interaction.reply({embeds: [{
            author: {
                name: "Avatar của " + member.user.tag +"'s",
            },
            image: {
                url: member.user.displayAvatarURL({ size: 4096, format: "png"})
            },
            color: "BLUE",
            timestamp: new Date()
        }], allowedMentions: { repliedUser: false }});

    }
}