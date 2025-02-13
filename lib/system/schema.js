module.exports = (m) => {
    const isNumber = x => typeof x === 'number' && !isNaN(x)
    let user = global.db.users.find(v => v.jid == m.sender)
    if (user) {
       if (!('name' in user)) user.name = m.pushName
       if (!isNumber(user.afk)) user.afk = -1
       if (!('afkReason' in user)) user.afkReason = ''
       if (!('afkObj' in user)) user.afkObj = {}
       if (!('banned' in user)) user.banned = false
       if (!isNumber(user.banTemp)) user.banTemp = 0
       if (!isNumber(user.banTimes)) user.banTimes = 0
       if (!isNumber(user.point)) user.point = 0
       if (!isNumber(user.guard)) user.guard = 0
       if (!isNumber(user.limit)) user.limit = global.limit
       if (!isNumber(user.lastclaim)) user.lastclaim = 0
       if (!('transfer_history' in user)) user.transfer_history = []
       if (!('saving_history' in user)) user.saving_history = []
       if (!isNumber(user.saving)) user.saving = 0
       if (!('premium' in user)) user.premium = false
       if (!isNumber(user.expired)) user.expired = 0
       if (!isNumber(user.lastseen)) user.lastseen = 0
       if (!isNumber(user.hit)) user.hit = 0
       if (!isNumber(user.spam)) user.spam = 0
       if (!isNumber(user.warning)) user.warning = 0
       if (!isNumber(user.attempt)) user.attempt = 0
       if (!('code' in user)) user.code = ''
       if (!isNumber(user.codeExpire)) user.codeExpire = 0
       if (!('email' in user)) user.email = ''
       if (!('verified' in user)) user.verified = false
       if (!('partner' in user)) user.partner = ''
       if (!('taken' in user)) user.taken = false
       if (!('authentication' in user)) user.authentication = false
   } else {
       global.db.users.push({
          jid: m.sender,
          name: m.pushName,
          afk: -1,
          afkReason: '',
          afkObj: {},
          banned: false,
          banTemp: 0,
          banTimes: 0,
          point: 0,
          guard: 0,
          limit: global.limit,
          lastclaim: 0,
          transfer_history: [],
          saving_history: [],
          savings: 0,
          premium: false,
          expired: 0,
          lastseen: 0,
          hit: 0,
          spam: 0,
          warning: 0,
          attempt: 0,
          code: '',
          codeExpire: 0,
          email: '',
          verified: false,
          taken: false,
          partner: '',
          authentication: false
       })
    }
 
    if (m.isGroup) {
       let group = global.db.groups.find(v => v.jid == m.chat)
       if (group) {
          if (!isNumber(group.activity)) group.activity = 0
          if (!('autoread' in group)) group.autoread = false
          if (!('antibot' in group)) group.antibot = true
          if (!('antidelete' in group)) group.antidelete = false
          if (!('antilink' in group)) group.antilink = true
          if (!('antiporn' in group)) group.antibot = false
          if (!('antivirtex' in group)) group.antivirtex = true
          if (!('captcha' in group)) group.captcha = false
          if (!('filter' in group)) group.filter = false
          if (!('game' in group)) group.game = true
          if (!('left' in group)) group.left = false
          if (!('localonly' in group)) group.localonly = false
          if (!('mute' in group)) group.mute = false
          if (!('member' in group)) group.member = {}
          if (!('text_left' in group)) group.text_left = ''
          if (!('text_welcome' in group)) group.text_welcome = ''
          if (!('welcome' in group)) group.welcome = true
          if (!isNumber(group.expired)) group.expired = 0
          if (!('stay' in group)) group.stay = false
       } else {
          global.db.groups.push({
             jid: m.chat,
             activity: 0,
             antibot: true,
             autoread: false,
             antidelete: false,
             antilink: true,
             anriporn: true,
             antivirtex: true,
             captcha: false,
             filter: false,
             game: true,
             left: false,
             localonly: false,
             mute: false,
             member: {},
             text_left: '',
             text_welcome: '',
             welcome: true,
             expired: 0,
             stay: false
          })
       }
    }
 
    let chat = global.db.chats.find(v => v.jid == m.chat)
    if (chat) {
       if (!isNumber(chat.chat)) chat.chat = 0
       if (!isNumber(chat.lastchat)) chat.lastchat = 0
       if (!isNumber(chat.lastseen)) chat.lastseen = 0
       if (!isNumber(chat.command)) chat.command = 0
    } else {
       global.db.chats.push({
          jid: m.chat,
          chat: 0,
          lastchat: 0,
          lastseen: 0,
          command: 0
       })
    }

   let setting = global.db.setting
   if (setting) {
      if (!('autodownload' in setting)) setting.autodownload = false
       if (!('debug' in setting)) setting.debug = false
       if (!('chatbot' in setting)) setting.chatbot = true
       if (!('games' in setting)) setting.games = true
       if (!('levelup' in setting)) setting.levelup= true
       if (!('error' in setting)) setting.error = []
       if (!('pluginDisable' in setting)) setting.pluginDisable = []
       if (!('groupmode' in setting)) setting.groupmode = false
       if (!('sk_pack' in setting)) setting.sk_pack = 'Ayane'
       if (!('sk_author' in setting)) setting.sk_author = '@Yuki21_'
       if (!('self' in setting)) setting.self = false
       if (!('verify' in setting)) setting.verify = false
       if (!('mimic' in setting)) setting.mimic = []
       if (!('hidden' in setting)) setting.hidden = []
       if (!('limiter' in setting)) setting.limiter = true
      if (!('noprefix' in setting)) setting.noprefix = false
      if (!('multiprefix' in setting)) setting.multiprefix = true
      if (!('prefix' in setting)) setting.prefix = ['.', '/', '!', '#']
      if (!('toxic' in setting)) setting.toxic = ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"]
      if (!('online' in setting)) setting.online = true
      if (!('onlyprefix' in setting)) setting.onlyprefix = '+'
      if (!('owners' in setting)) setting.owners = ['6289626692456']
      if (!isNumber(setting.lastReset)) setting.lastReset = new Date * 1
      if (!('msg' in setting)) setting.msg = 'Hi +tag 🪸\n\n◦ *Database* : +db ◦\nBila Menemukan Error/Ingin Premium Beritahu Owner.'
      if (!isNumber(setting.style)) setting.style = 2
      if (!('cover' in setting)) setting.cover = 'https://telegra.ph/file/d5a48b03b80791b50717f.jpg'
      if (!('link' in setting)) setting.link = 'https://chat.whatsapp.com/FvbHnOhh7jRHYmuHtcOwCz'
   } else {
      global.db.setting = {
         autodownload: false,
          chatbot: true,
          debug: false,
          games: true,
          levelup: true,
          error: [],
          pluginDisable: [],
          groupmode: false,
          sk_pack: 'Ayane',
          sk_author: '@Yuki21_',
          self: false,
          verify: false,
          mimic: [],
          hidden: [],
          limiter: true,
         noprefix: false,
         multiprefix: true,
         prefix: ['.', '#', '!', '/'],
         toxic: ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"],
         online: true,
         onlyprefix: '+',
         owners: ['6289626692456'],
         lastReset: new Date * 1,
         msg: 'Hi +tag 🪸\n\n◦ *Database* : +db ◦\nBila Menemukan Error/Ingin Premium Beritahu Owner.',
         style: 2,
         cover: 'https://telegra.ph/file/d5a48b03b80791b50717f.jpg',
         link: 'https://chat.whatsapp.com/FvbHnOhh7jRHYmuHtcOwCz'
      }
   }
}