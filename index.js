require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const { OpenAI } = require('openai');

// Directly set API keys in your code


// Initialize Discord Bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Initialize OpenAI API
const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

// Listen for messages
client.on('messageCreate', async (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;

    try {
        // Send the user's message to ChatGPT
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // Use the desired model
            messages: [{ role: 'user', content: message.content }],
        });

        // Reply with ChatGPT's response
        const reply = response.choices[0].message.content;
        message.reply(reply);
    } catch (error) {
        console.error('Error with OpenAI API:', error);
        message.reply('Sorry, I encountered an error.');
    }
});

// Log the bot in
client.login(YOUR_BOT_TOKEN);
