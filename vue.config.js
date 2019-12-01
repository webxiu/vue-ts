module.exports = {
    devServer: {
        // 给服务器加接口
        before(app) {
            app.get('/api/getFeature', (req, res) => {
                res.json([
                    { id: 1, name: "路附近啊" },
                    { id: 2, name: "测试的返回数据" }
                ])
            })

        }
    }
}