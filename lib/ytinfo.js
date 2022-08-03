const yts = require( 'yt-search' )

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

        let result = { songmsg : '*┌───[ QUEEN DIANA SONG DOWNLOADER ]\n\n*│*  ```Song :-``` ' + title2 + '\n\n*│*  ```Views :-``` ' + views + '\n\n*│*  ```Channel :-``` ' + author + '\n\n*│*  ```URL :-``` ' + url + '\n\n└─────────────────────◉' , 

                       vidmsg : '*┌───[ QUEEN DIANA VIDEO DOWNLOADER ]\n\n*│* ️ ```Video :-``` ' + title2 + '\n\n*│*  ```Views :-``` ' + views + '\n\n*│*  ```Channel :-``` ' + author + '\n\n*│* ️ ```URL :-``` ' + url + '\n\n└─────────────────────◉' ,

                      thumbnail : thumbnail ,

                     yuturl: url }

        return result

 

        }

}

module.exports = ytinfo ;

