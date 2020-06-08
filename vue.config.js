module.exports = {
    devServer: {
        // 给服务器加接口
        before(app) {
            app.get('/api/getFeature', (req, res) => {
                res.json([
                    { id: 1, name: "接口配置数据1" },
                    { id: 2, name: "接口配置的返回数据" }
                ])
            })

        }
    }
}