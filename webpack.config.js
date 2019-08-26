const path = require('path');

module.exports = {
    "mode": "development",
    devtool: 'source-map',
    "entry": path.resolve(__dirname, 'src','app'),
    "output": {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js','.jsx','.css']
    },
    devServer: {
        historyApiFallback: true
    },
    module : {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader'
            },{                
                test: [/.css$|.scss$/],                
                use:[                    
                 'style-loader',   
                 {
                     loader: 'css-loader',
                     options: {
                       modules: true,
                     },
                   }              
                ]            
              }
        ]
    }

}