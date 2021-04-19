const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity("como se arma un mierdero", { type: "WATCHING" });
  console.log("Listo!");
});

let prefix = process.env.PREFIX;
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || !message.guild) return;
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content.startsWith(prefix + "info")) {
    message.reply({
      embed: {
        description: `Hola Faralloines
        `,
      },
    });
  }
  if (message.content.startsWith(prefix + "bonice")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Esgar/bon.wav").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "limon")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/guitarrin/limon.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "hpta")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/varios/hpta.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "santiaga")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/varios/santiaga.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "vaca")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/vaca.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "dudas")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/varios/dudas.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "kpi")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/varios/kpi.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "marcho")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/varios/marcho.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "fls")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/varios/fls.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "desgrac")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/varios/desgrac.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "prob")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/marto/marto.wav").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "ayno")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/guitarrin/ayno.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "estres")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/guitarrin/guita2.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "bga")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/guitarrin/guita3.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "gol")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/guitarrin/guita4.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "madre")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/marto/marto4.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "crack")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/marlos/crack.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "ja")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/guitarrin/ja.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "hello")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/marto/marto5.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "guita")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/guitarrin/guita6.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "morcillo")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/marlos/morcillo.mp3").on("finish", () =>
        VoiceConnection.disconnect()

      );
    });
  }
});

client.login(process.env.TOKEN);
