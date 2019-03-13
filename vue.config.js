module.exports = {
    pages: {
        index: {
            entry: 'src/main.js', //entry for the public page
            template: 'public/index.html', // source template
            filename: 'index.html' // output as dist/*
        },
        reporte: {
            entry: 'src/assets/js/reporte.js',
            template: 'public/reporte.html',
            filename: 'reporte.html'
        }
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /\/index/, to: '/index.html' },
                { from: /\/reporte/, to: '/reporte.html' },
            ]
        }
    }
};