/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx742245ff1cab6597',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '76328c7ba7dd76caff200827873ef0f9',

  PROVINCE: '辽宁',
  CITY: '沈阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '哥哥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oelhR5x5lAmEEnKHl_qqe83nzAFs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mFzef1OAVVrsvM6IGH7WAqVKjshu9JigU7yno6fnv0s',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-13',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: '哥哥', year: '1992', date: '05-13',
//         },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '哥哥', year: '1992', date: '05-13',
        },
        {
          type: '生日', name: '宝宝', year: '1995', date: '12-30',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-12-08' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2019-12-08' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'CZ2xz3mIxNt62KIzjWhn17Bq30Vv3XfgpXQhq1nstG8',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oelhR5x5lAmEEnKHl_qqe83nzAFs',
    }
  ],

}

module.exports = USER_CONFIG

