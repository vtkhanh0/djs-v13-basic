const client = require('../index');

client.on('ready', () => {
    console.log("Bot online!")

    client.user.setPresence({ activities: [{ name: 'Moon', type: "WATCHING" }], status: 'idle' });
});