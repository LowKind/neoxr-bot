exports.run = {
   usage: ['owner'],
   category: 'miscs',
   async: async (m, {
      client,
      env,
      Func
   }) => {
      client.sendContact(m.chat, [{
         name: env.owner_name,
         number: env.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'Yuki',
         website: 'https://ykproject.dev',
         email: 'lordtakt@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}