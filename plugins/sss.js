const evt = require('../events')
const config = require('../config');
const fs = require('fs');
const yts = require( 'yt-search' )
const ytmp3 = require('../lib/ytmp3');



async function ytinfo(link) {
    let arama = await yts(link);
    arama = arama.all;
    if(arama.length < 1) { 
    let result = { status : false} 

  return result 

   } 

  else {

let thumbnail = arama[0].thumbnail;
let title = arama[0].title.replace(/ /gi, '+');
let title2 = arama[0].title
let views = arama[0].views;
let author = arama[0].author.name;
let url = arama[0].url

  let result = { songmsg : '*┌───[ QUEEN DIANA SONG DOWNLOADER ]\n\n*│*  ```Song :-``` ' + title2 + '\n\n*│*  ```Views :-``` ' + views + '\n\n*│*  ```Channel :-``` ' + author + '\n\n*│*  ```URL :-``` ' + url + '\n\n└────────────────◉' , 
                  vidmsg : '*┌───[ QUEEN DIANA VIDEO DOWNLOADER ]\n\n*│* ️ ```Video :-``` ' + title2 + '\n\n*│*  ```Views :-``` ' + views + '\n\n*│*  ```Channel :-``` ' + author + '\n\n*│* ️ ```URL :-``` ' + url + '\n\n└──────────────◉' ,

                thumbnail : thumbnail ,
                yuturl: url }

  return result
}
}



evt.getCMD({pattern: 'nsong$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
     
     if (!match[1]) return await message.client.sendMessage(message.jid , { text: "need word" }, { quoted: message.data } )
     const link = match[1]
       let ytmsg = await ytinfo(link)
       
       if (!ytmsg.thumbnail) {
       
       await message.client.sendMessage(message.jid , { text: "cant find anything" }, { quoted: message.data } )
       } else {
       
       const songbuttons = [
                               {buttonId: 'dcsong ' + ytmsg.yuturl, buttonText: {displayText: 'DOCUMENT'}, type: 1}, 
                               {buttonId: 'acsong ' + ytmsg.yuturl, buttonText: {displayText: 'AUDIO'}, type: 1}]
       await message.client.sendMessage(message.jid, { image: {url: ytmsg.thumbnail }, caption: 'hi bro \n\n' + ytmsg.songmsg , footer: 'pakaya' , buttons: songbuttons , headerType: 4 } , { quoted: message.data } )		
} }));
