const fs = require('fs')
const chalk = require('chalk')


global.botname = "Elena 🇰🇪" 
global.botLanguage = "default" // 𝗗𝗲𝗳𝗮𝘂𝗹𝘁 || 𝗘𝗻𝗴𝗹𝗶𝘀𝗵 || 𝗛𝗶𝗻𝗱𝗶 || 𝗔𝗿𝗮𝗯𝗶𝗰 \\
global.author = "𝐏𝐑𝐈𝐍𝐂𝐄"  
global.packname = "𝖤𝖫𝖤𝖭𝖠✰𝖡𝖮𝖳"  
global.myweb = "https://linktr.ee/princemaster254" // You can put any link 
global.waterMark = "×͜× prince ✘™ ✓" // Your own watermark 
global.headerText = "PRINCE BOT" // text for header of menu         
global.DocumentTitle = "MASTER⚔️PRINCE" 


global.ownername = "𝐏𝐑𝐈𝐍𝐂𝐄"   // Owner name //        
global.ownernumber = ['254768371432'] 
global.socialm = "𝗜𝗻𝘀𝘁𝗮 : @princemaster00" // 𝗜𝗻𝘀𝘁𝗮 : || 𝗚𝗶𝘁𝗵𝘂𝗯 : || 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : \\
global.ytname = "YT: Ytname"   // Yt chanel name //
global.continent = "AFRICA" // your continent name 
global.region = "East Africa" // your country name
global.state = "Kenya" // your state name
global.district = "Thika" // your district name
global.timezone = "East Africa Time" // search on google if you don't know the timezone of your country //
global.instagramId = "princemaster00" // Your insta ID
global.email = "princemaster2006@gmail.com" // put your email here


//------------ 🌟 Premium Users 🌟-------------\\
global.premium = ['254768371432']  // available soon
global.sudo = ['254768371432']  // Co - Owners //

global.prefa = ['-','🥵','🔥']

//--------Random bot name for Info section--------\\
name16 = "𓄂⍣⃝ 🇦𝚗𝚢𝚊 𓆩×͜×𓆪ꪾ️"
name17 = "*Λ⃝ͷ🇾Λ 𓆩×͜×𓆪ꪾ*"
name18 = "*Λ⃝ͷʏΛ 𓆩×͜×𓆪ꪾ*"

//--------Random footer message-----------\\
footer1 = `𓄂⍣⃝🇦𝚗𝚢𝚊ㅤꪜ⃢𝟤ㅤ𓆩×͜×𓆪ꪾ `
footer2 = `Λ⃝ͷʏΛㅤꪜ⃢𝟤ㅤ𓆩×͜×𓆪ꪾ`

//--------Left message "Nikal msg"--------\\
nikalmsg1 = 'Ye galiye ye choubara, yaha dikhna na dubara 😚🖕🏻' 
nikalmsg2 = 'Patt se headshot 🔫...Abey dil se bura lagta hai bhai 😂.'

//--------Random Tag msg--------\\
tag1 = '𝘏𝘦𝘺 𝘦𝘷𝘦𝘳𝘺𝘣𝘰𝘥𝘺😚, 𝘊𝘰𝘮𝘦 𝘰𝘯𝘭𝘪𝘯𝘦 𝘢𝘯𝘥 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘢𝘸𝘦𝘴𝘰𝘮𝘦 𝘉𝘰𝘵 owned by prince hehe.' 
tag2 = '𝘖𝘺𝘦 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦!! 𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?😐' 
tag3 = 'where is my baby samantha? And prince!😑' 
tag4 = '𝘞𝘰𝘸 𝘭𝘰𝘰𝘬 𝘢𝘵 𝘵𝘩𝘪𝘴 𝘢𝘥𝘷𝘢𝘯𝘤𝘦 𝘉𝘰𝘵.😚.' 
tag5 = '𝘠𝘢𝘢𝘳 𝘬𝘺𝘢 𝘉𝘰𝘵 𝘩𝘢𝘪❤️' 
tag6 = '𝘐𝘵𝘯𝘢 𝘮𝘻𝘢 𝘬𝘺𝘶 𝘢𝘢 𝘳𝘩𝘢 𝘩𝘢𝘪...𝘛𝘶𝘯𝘦 𝘩𝘢𝘸𝘢 𝘮𝘦 𝘣𝘩𝘢𝘯𝘨 𝘮𝘪𝘭𝘢𝘺𝘢 𝘩𝘢𝘪!🥵' 
tag7 = '𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?' 
tag8 = '𝘏𝘦𝘺 𝘸𝘩𝘦𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?...𝘤𝘰𝘮𝘦 𝘩𝘦𝘳𝘦 𝘨𝘶𝘺𝘴 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘖𝘗 𝘉𝘰𝘵!🔥' 
tag9 = '𝘠𝘰𝘶 𝘢𝘭𝘭 𝘴𝘩𝘰𝘶𝘭 𝘵𝘳𝘺 𝘵𝘩𝘪𝘴 𝘤𝘶𝘵𝘦 𝘈𝘯𝘺𝘢❤️🍫' 
tag10 = '𝘈𝘺𝘰𝘰 𝘈𝘯𝘺𝘢 𝘪𝘴 𝘉𝘦𝘴𝘵!!😚' 


global.mess = {
    success: 'Work done 𝗗𝗮𝗿𝗹𝗶𝗻𝗴❤️',
    admin: "Baby!\nThis command is only for 𝗔𝗱𝗺𝗶𝗻𝘀...So i can't process your command babe. 😑", // User "\n" for change the line 
    botAdmin: 'First make me 𝗔𝗱𝗺𝗶𝗻!!! 😐',
    owner: 'This command is only for my 𝗼𝘄𝗻𝗲𝗿. Prince .',
    group: "Baka !!!!!\nYou can't use this command in a 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁 you dick head!😑",
    private: 'Such a baka !!\nThis command is only for 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁𝘀 you dick head. 🥲',
    bot: "This Feature Is Only For 𝗕𝗼𝘁... and you're not a 𝗕𝗼𝘁 beb.",
    wait: "I'm progressing your command baby❤️, Please wait......",
    linkm: 'Abey where is the link...?',
    error: 'I got an 𝗲𝗿𝗿𝗼𝗿!!',
    sudo: "*Hey User 👋....*\nYou can't use this command because this command is only for my dear prince😘.", 
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the 𝗼𝘄𝗻𝗲𝗿 😡, if you want to be 𝘂𝗻𝗯𝗮𝗻𝗻𝗲𝗱, chat owner wa.me/254768371432.',
    nsfw: 'The nsfw feature has not been activated, Bc padhai likhai karo 𝗜𝗔𝗦 - 𝗬𝗔𝗦 bano lekin nhii tumhe to nudity dekhni hai 👏',
    banChat: 'The bot was banned 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽!, please contact the owner to unban.'
}

//--------------- Menu images ----------------\\
global.Menuimage = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg.jpg")
global.thumnnaiIs = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg2.jpeg")

//--------------- Systemjc Function --------------\\
global.autoTyping = true 
global.autoreadpmngc = true 
global.autoReadGc = true 
global.autoRecord = false 
global.available = true
global.autoTyping = false 

//----------- Users Userlimit -----------\\
global.userLimit = {
premium: "Infinity",  // premium users 
free: 12,            // Free users
}


/*𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹 DANGER ZONE ⚠️👇 𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
