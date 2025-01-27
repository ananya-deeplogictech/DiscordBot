# DiscordBot with OpenAI GPT Integration

This is a simple Discord bot that uses OpenAI's GPT-3.5-turbo model to respond to users' messages. The bot listens for messages and replies using the GPT-3.5 model, which is connected via the OpenAI API.

## Features
- The bot responds to user messages using OpenAI's GPT-3.5 model.
- The bot is connected to Discord using the Discord.js library.
- Secrets like the OpenAI API key are securely managed using environment variables.

## Prerequisites
- Node.js (v18 or later recommended)
- Discord account and a bot created via [Discord Developer Portal](https://discord.com/developers/applications)
- OpenAI account to get your API key

## Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/DiscordBot.git
cd DiscordBot
 ```
### 2. Initialize the Project
If you have not initialized the project yet, run the following to set up a new package.json file:
```bash
npm init -y
```
### 3. Install Dependencies

Install the required packages:
```bash
npm install discord.js openai dotenv
```
### 4. Set Up Environment Variables

Create a .env file in the root directory of the project. In this file, you need to add your Discord Bot Token and OpenAI API Key:
```bash
# .env

DISCORD_TOKEN=your-discord-bot-token
OPENAI_API_KEY=your-openai-api-key
```
### 5. Run the Bot

To start the bot, use the following command:
```
node index.js
