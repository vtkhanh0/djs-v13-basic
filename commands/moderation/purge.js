const { Client, Message } = require('discord.js');

module.exports = {
    name: "purge",
    description: "Xoá tin nhắn trong kênh",
    aliases: ["clear"],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute(client, message, args) {
        if(!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.reply({content:"Bot không có quyền để xoá tin nhắn!", allowedMentions: { repliedUser: false }});

        if(!args[0]) return message.reply({content:"Cung cấp số tin nhắn cần xoá", allowedMentions: { repliedUser: false}});
        if(isNaN(args[0])) return message.reply({content:"Bạn phải cung cấp con số hợp lệ", allowedMentions: { repliedUser: false }});
        if(args[0] < 1 || args[0] > 99) return message.reply({content:"Bot chỉ có thể xoá nhiều nhất 100 tin nhắn!", allowedMentions: {repliedUser: false}});

        message.channel.bulkDelete(+args[0] + 1)
            .then(messages => {
                message.channel.send("Đã xoá " + messages.size + " tin nhắn!")
                .then(msg => {
                    if(msg.deletable) setTimeout(() => { if(msg.deletable) msg.delete() }, 5000);
                })
            })
            .catch(console.error);
    }
}