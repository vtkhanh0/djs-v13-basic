const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const { PREFIX } = require('./config.json');

require('dotenv').config();
require('./handlers/baseHandler');

client.commands = new Collection();
client.slashCommands = new Collection();

client.prefix = PREFIX;

module.exports = client;
client.login(process.env.TOKEN, err => console.log(err));
