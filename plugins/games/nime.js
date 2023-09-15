exports.run = {
   usage: ['cosplay'],
   category: 'fun wibu',
   async: async (m, {
      client
   }) => {
      client.nime = client.nime ? client.nime : {}
         let json = Func.jsonRandom('./media/json/nime.json')
         let teks = `乂  *C O S P L A Y*`
            await client.sendFile(m.chat, json.img, 'image.jpg', teks, m),
            json
      },
   group: true,
   limit: true
  }