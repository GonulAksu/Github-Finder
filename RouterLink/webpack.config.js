//çıktı dosyasının hangi dizine gideceğini belirlemek içn ekstra bir nodejs paketine ihtiyacımız var
const path=require("path");
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    devServer:{
        //contenBase = hangi klasör içindeki dosyalar taranacak
        //compress:true =sıkıştırılsınmı
        //ve port numarasıda verebilirz
        contentBase:path.resolve(__dirname,"dist"),
        port:8080,
        historyApiFallback:true

    },
    module:{
        rules:[
            {
                //tüm js dosyalarına bakılsın
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
                //ve node_modelus klasörü taranmasın

             },
             {
                // test:/\.css$/,
                test:/\.scss/,
                use:['style-loader','css-loader','sass-loader']
             },
             {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }

        ]
    }
}