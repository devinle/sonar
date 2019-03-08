module.exports = {
    mode: 'production',
    entry: ['./src/sonar.js'],
    output: {
        path: __dirname+'/dist',
        filename: 'sonar.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}
