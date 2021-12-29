// @ts-check

const express = require('express')
const qrCode = require('qrcode')

const PORT = 3000
const app = express()
app.use(express.static('./static'))

app.get('/:qr', (req, res) => {
  qrCode.toDataURL(req.params.qr, (err, url) => {
    const data = url.replace(/.*,/, '')
    const img = Buffer.from(data, 'base64')
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(img)
  })
})

// @ts-ignore
app.listen(PORT, (res, req) => {
  console.log(`listening on Port ${PORT}`)
})
