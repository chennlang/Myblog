//change
const db = wx.cloud.database()
const change = db.collection('W-P_equ9e31Z7K-0')
exports.main = (event, context) => {
  db.collection('change').doc('W-P_equ9e31Z7K-0').get().then(res => {
    // res.data 包含该记录的数据
    console.log(res.data)
    return res.data;
  })
}