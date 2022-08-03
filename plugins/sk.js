const evt = require('../events')

const yts = require( 'yt-search' )




evt.getCMD({pattern: 'sdf$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
    if (!match[1]) return await message.client.sendMessage(message.jid , { text: "need word" }, { quoted: message.data } )
    await message.client.sendMessage(message.jid, { text: 'downloading'  } , { quoted: message.data } )
   /* let arama = await yts(match[1]);
        arama = arama.all;
     if(arama.length < 1) { 
                            return await message.client.sendMessage(message.jid, { text: 'cant find anything'  } , { quoted: message.data } )		
                          } else {

let thumbnail = arama[0].thumbnail;*/
let thumb = 'https://telegra.ph/file/3217c19d381ae34b38012.jpg'
var songmsg = "'*┌───[ QUEEN DIANA SONG DOWNLOADER ]\n\n*│*  ```Song :-``` ' + title2 + '\n\n*│*  ```Views :-``` ' + views + '\n\n*│*  ```Channel :-``` ' + author + '\n\n*│*  ```URL :-``` ' + url + '\n\n└────────────────◉' "
                

await message.client.sendMessage(message.jid, { image: {url: thumb }, caption: songmsg  } , { quoted: message.data } )		
             

await message.client.sendMessage(message.jid, { image: {url: thumb }  } , { quoted: message.data } )	
             
}));
