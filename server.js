const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "token"
  prefix: "prefix here"
});

bot.onMessage();
//commands

bot.command({
  name: "ping",
  code: `Api : $ping MS 🏓`
});
	
bot.command({
	name: "<@791655895196368906>",
	nonPrefixed: true,
	code: `
	$description[Bruh You found my prefix lmao]
	$footer[do wc help nerd]
	$color[RED]
	` 
	})

//status

bot.status({
  text: "$allMembersCount Welcomers Gang",
  type: "WATCHING",
  time: 12,
  status: "idle",
});

bot.status({
  text: "New comer :(",
  type: "WATCHING",
  status: "idle",
  time: 12
});

bot.status({
  text: "Ping for prefix nerd",
  type: "WATCHING",
  status: "idle",
  time: 12
});

//Read more information about status in docs:
//https://dbd.leref.ga/guide/bot-status

//variables

bot.variables({
  welcome: "",
  message: "Read the rule and enjoy (edit use wc setwelcomemessage)",
  color: "GREEN",
  leave: "",
  leavem: ""
});

//You can add more variables :)
//Join our Support Server & read Documentation for help :)

bot.command({
  name: "help",
  code: `
  $title[Welcomer Help]
  $addField[Other;
\`play (p)
stop (s)
skip (sk)
loop (l)\`;no]
$addField[Utility;
\`ping
stat (status)
invite (inv)\`;no]
$description[Under beta (all coming soon)]
$footer[Support server dsc.gg/deezee]
$color[$getServerVar[color]]
  `
});
	
bot.command({
 name: "loop",
 aliases: ["l"],
 code: `
 $title[Success]
 $thumbnail[$userAvatar[$authorID]]
 $color[$getServerVar[color]]
 $description[$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;You successfully **enable** loop queue];false;You successfully **disable** loop queue]]
$onlyIf[$voiceID!=;{description:Please enter a voice channel to execute this command}{color:RED}]
$suppressErrors[❌ There Nothing Has been playing now]`
 });

bot.onMusicStart()
bot.musicStartCommand({
 channel: "$channelID", 
 code: `
 $color[GREEN]
 $author[Now Playing]
 $description[Playing $songInfo[title]]
 $footer[Use $getServerVar[prefix]play to add more song!]`

bot.command({
  name: "play",
  aliases: ["p"],
  code: `
	$title[New song has been added to the queue]
	$description[[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title]\\]($jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url])]
	$footer[Now playing $songInfo[title]]
	$argsCheck[>1;Can you type a song name please]
	$playSong[$message;We have problem with your song name please try again later]
	$color[GREEN]
	$onlyIf[$voiceID!=;{description:Please enter a voice channel to execute this command}{color:RED}]
	`
});

bot.command({
  name: "stop",
  aliases: ["s"],
  code: `
  $addCmdReactions[🔴]
  $title[Song stopped]
  $stopSong
  $description[Stopped all the song and clear the queue]
  $footer[Wanna play some music? use $getServerVar[prefix]play]
  $onlyIf[$voiceID!=;{description:Please enter a voice channel to execute this command}{color:RED}]
   $suppressErrors[❌ There Nothing Has been play]`
});

bot.command({
  name: "skip",
  aliases: ["sk"],
  code: `
  $addCmdReactions[⏭]
  $title[Song skipped]
   $description[Skipped [$songInfo[title]\\]($songInfo[url)]
  $skipSong
  $footer[Tips: To see all the song please use $getServerVar[prefix]queue]
  $onlyIf[$voiceID!=;{description:Please enter a voice channel to execute this command}{color:RED}]
   $suppressErrors[❌ There Nothing Has been play]`
});

bot.command({
	name: "stat",
	aliases: ["status"]
	code:`
	$author[Status of the bot;$userAvatar]
	$addField[Ping;
	\`$ping Ms\`]
	$addField[Server Count;
	\`$ServerCount\`]
	$addField[Global users Count;
	\`$allMembersCount\`]
	$addField[Features;
	\`Music,Welcome message/log,Leave message/log\`]
	$addField[Created dates;
	\`25 December 2020\`]
	$addField[Owners;
	\`INCASX丶FrickZy#0435,TheDeeZeeDev#2600\`]
	$addField[Name;
	\`Welcomer#5283\`]
	$color[GREEN]
	$addTimestamp`
	})

bot.command({
	name: "invite",
	aliases: ["inv"],
	code: `
	$author[Invite the bot;$userAvatar]
	$description[Choose the invite type below]
	$addField[Invite with Adminsator permission;
	[`Available Here`\\]($getBotInvite)]
	$addField[Invite with normal permission;
	`\Unavailable\`]
	$addTimestamp
	$color[GREEN]
	`
	})