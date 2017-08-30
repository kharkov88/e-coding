const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
    entry:'./front/index.js',
    output:{
        path: __dirname + '/public',
        publicPath:'/',
        filename:"bundle.js",
        library:'myApp'
    },
      watch: true,
      watchOptions:{
        aggregateTime:100
      },
module: {
    loaders: [{
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }},
        {
          test:/\.css$/,
          loader:'style-loader!css-loader'
        },
        {
          test:/\.less$/,
          use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!less-loader"
        })
          //loader:ExtractTextPlugin('less','style-loader!css-loader!less-loader')
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name:`[path][name].[ext]`
              }  
            }
          ]
        }
    ]
  },
    plugins:[
    new ExtractTextPlugin("css/style.css")
  ]
};
