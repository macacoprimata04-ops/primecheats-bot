const { Client, GatewayIntentBits, Partials } = require("discord.js");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// 🌐 Site simples pra manter o bot online
app.get("/", (req, res) => {
  res.send("🤖 Bot PrimeCheats online 🚀");
});

app.listen(PORT, () => {
  console.log(`🌐 Web rodando na porta ${PORT}`);
});

// 🤖 Bot Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Channel]
});

client.once("ready", () => {
  console.log(`✅ Bot logado como ${client.user.tag}`);
});

// 🔐 Token vem do Render (NUNCA coloque token aqui)
client.login(process.env.DISCORD_TOKEN);
