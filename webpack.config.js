const path = require('path');

module.exports = {
    entry: "./src/App.jsx", // входная точка - исходный файл
    output:{
        /*path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла*/
        filename: "areaTriangle.js",
        path: path.resolve(__dirname, "lib"),
        libraryTarget: "umd",
        umdNamedDefine: true,
        library: "areaTriangle"
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    externals: {
        'react': 'umd react'
    }
}