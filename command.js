const { REST, Routes } =require( 'discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTMzMzMxODUwNTU4NzU0NDA5Nw.GzvBrd.4ifjIDDUgFlY8BRvb47dpkmAavtp79zH9Foync");
(async ()=>{


try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1333318505587544097"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
}) ();
