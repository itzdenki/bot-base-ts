import { Events, Client, ActivityType } from 'discord.js';

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client: Client) {
    console.log(`Ready! Logged in as ${client.user?.tag}`);
    
    // Set bot status
    client.user?.setPresence({
      activities: [{ name: 'with Discord.js', type: ActivityType.Listening }],
      status: 'online',
    });
  },
};
