module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/movie-cinemaku' : '/',
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
            alias: {
               vue$: "vue/dist/vue.esm.js"
            },
        }
    }
}
