const evt = require('../events')
const config = require('../config');
const fs = require('fs');
const yts = require( 'yt-search' )
//const { yt720 ,  yt480 ,  yt360 } = require('../lib/ytmp4');
const ytmp3 = require('../lib/ytmp3');
const ytinfo = require('../lib/ytinfo');
//const Language = require('../language');
//const Lang = Language.getString('yt');
const prefix = '.'

evt.getCMD({pattern: 'song$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
     
   await message.client.sendMessage(message.jid , { text: "search result for faded" }, { quoted: message.data } )
     
     const link = 'faded'
       let ytmsg = await ytinfo(link)
       if (!ytmsg.thumbnail) {
       
       await message.client.sendMessage(message.jid , { text: "cant find anything" }, { quoted: message.data } )
       } else {
       
       const songbuttons = [
                               {buttonId: prefix +'dcsong ' + ytmsg.yuturl, buttonText: {displayText: 'DOCUMENT'}, type: 1}, 
                               {buttonId: prefix +'acsong ' + ytmsg.yuturl, buttonText: {displayText: 'AUDIO'}, type: 1}]
       await message.client.sendMessage(message.jid, { image: {url: ytmsg.thumbnail }, caption: 'hi bro' /*ytmsg.songmsg , footer: 'pakaya' , buttons: songbuttons , headerType: 4*/ } , { quoted: message.data } )		
} }));
