var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Shady", //Açıkalama -1
assets : {
large_image : "shady", //Developer Discorda Eklediğimiz Resim
large_text : "Youtube" // Açıklama-2
}, 
buttons : [{label : "Discord" , url : "https://discord.gg/CcaV4YRVQ4"},{label : "Youtube",url : "https://youtube.com/channel/UCrWv6tgB6v9AVGx28IFSsMQ"}] 
} // Discord ve Youtube Yazan Yerleri Kendinize Göre Düzeneyebilirsiniz.
})
})
client.login({ clientId : "831831849306161182" }).catch(console.error);  //Bot ID
client.on('ready', () => {
    console.log(`------------------------------------------------------------------`)
    console.log(`Herhangi bir hata bulunamadı.`)
    console.log(client.user.username, `hesabı ile yetkilendirildi.`)
    console.log(`------------------------------------------------------------------`)
});
//SHADY