import { Router } from 'express'
import consola from 'consola'
import xss from 'xss'
import moment from 'moment'
import multer from 'multer'
import sharp from 'sharp'
import fs from 'fs'
// import mkdirp from 'mkdirp-promise'
import connection from '../mysqlConnect'

const router = Router()
router.post('/posts', (req, res, next) => {
  const id = xss(req.body.id)
  const title = xss(req.body.title)
  const tags = xss(req.body.tags)
  const content = xss(req.body.content)
  const cover = xss(req.body.cover)
  const canonical = xss(req.body.canonical)
  const series = xss(req.body.series)
  const postType = xss(req.body.type)
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const postQuery = `INSERT INTO dev_posts (user_id, title, tags, content, cover_image, canonical, series, post_status, created_at) VALUES('${id}', '${title}', '${tags}', '${content}', '${cover}', '${canonical}', '${series}', '${postType}', '${createdAt}')`
  connection.query(postQuery, function (err, rows) {
    if (err) consola.error(err)
    else res.redirect(req.get('referer'))
  })
})
const clientThumb = multer.diskStorage({
  // ファイルの保存先を指定
  destination: './static/upload/',
  // ファイル名を指定(オリジナルのファイル名を指定)
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage: clientThumb
})
router.post('/fileupload', upload.single('thumbnail'), function (req, res) {
  const filepath = './static' + req.body.fileupload
  sharp(filepath).resize(1000, 420).toBuffer(function (err, info) {
    fs.writeFile(filepath, info, function (e) {
      if (err) return consola.error(err)
      res.redirect(req.get('referer'))
    })
  })
})
router.post('/remove_file', function(req, res) {
  const file = './static' + req.body.filepath
  fs.unlink(file, (err) => {
    if (err) throw err;
    res.redirect(req.get('referer'))
  })
})
export default router
