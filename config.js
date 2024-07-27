const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212693360020";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_21_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTczLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICA3MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwLFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTUM4L2JJbUxuQ1RyQWx4U2xkalB2akI2eXpxNC91RjNlR3hidDdPTTFpaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZmRGRjJvaXdTYTZzQzNOa1hlVFBuUVwiLFxuICBcInBob25lSWRcIjogXCI3ZGRmY2E4OC1hNzAyLTQzNGEtODQ4NS00MjY0ZmFmYjAxMzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgOTQsXG4gICAgICAxMjksXG4gICAgICAxMDEsXG4gICAgICA1NyxcbiAgICAgIDE1MixcbiAgICAgIDU0LFxuICAgICAgMjQ2LFxuICAgICAgODksXG4gICAgICAyMTEsXG4gICAgICAxOTEsXG4gICAgICAxNjMsXG4gICAgICAyMDMsXG4gICAgICA0NixcbiAgICAgIDI1MSxcbiAgICAgIDI0OSxcbiAgICAgIDIzMixcbiAgICAgIDg3LFxuICAgICAgMTQ1LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICA4NyxcbiAgICAgIDg4LFxuICAgICAgMjIwLFxuICAgICAgMTY3LFxuICAgICAgMTE4LFxuICAgICAgMjE5LFxuICAgICAgMjEzLFxuICAgICAgMTg2LFxuICAgICAgODUsXG4gICAgICAxNDgsXG4gICAgICAxODQsXG4gICAgICAxMCxcbiAgICAgIDI0MCxcbiAgICAgIDE2MSxcbiAgICAgIDQwLFxuICAgICAgMTgxLFxuICAgICAgMzAsXG4gICAgICAyMTYsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ozajlkTUhFSzNKbGJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ0FqcU9NdXBKS2R1ZXNEQXEyVHMrL0ZQZ1Jhdi9sNVZVbEQySXlJdkMyaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3SmdqdkFhalFyWWhMTVNPeU54ZjFuQnZlWjcya2pjckpiM0xGU01TL3NyRHRQOGN2Y0hWemREbG5LUGZaZkNlbGpSS01HTkdUZkFFMWlKWGFXc3lDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuS0w5eGdOanU4ekhyRVZmbWxrckdQdjJVa1hyN0srWk1talJCb2xOMXN4azNLVEY4TVN6L25jZzVZWHdSOWFYRzNtUnFZT1UyalRZVnIyQ2lEM2dBdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY5MzM2MDAyMDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjM1MDgyMDgxOTE2ODo1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjkzMzYwMDIwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjExNTI1NFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "yousf",
  ownername:process.env.OWNER_NAME|| "TAMOSA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
