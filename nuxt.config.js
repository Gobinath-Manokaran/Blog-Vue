module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blogui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Gobi blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js' },
      { src: '//cdn.jsdelivr.net/momentjs/latest/moment.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' },
      { src: 'http://malihu.github.io/custom-scrollbar/3.0.0/jquery.mCustomScrollbar.concat.min.js' },
      { src: '//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js' },
      // { src: 'js/pdfobject.min.js' },
      // { src: '//mozilla.github.io/pdf.js/build/pdf.js' },
      {src: '//media.twiliocdn.com/sdk/js/client/v1.3/twilio.min.js'}
    ],
  },
    /*
    ** Global CSS
    */
    css: ['~/assets/css/bootstrap.min.css',
    '~/assets/css/clean-blog.min.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
