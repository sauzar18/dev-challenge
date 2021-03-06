import fs from 'fs'
import { Router } from 'express'
import consola from 'consola'
import xss from 'xss'
import moment from 'moment'
import multer from 'multer'
import sharp from 'sharp'
import connection from '../mysqlConnect'
const router = Router()
// 記事を投稿する機能
router.post('/posts', (req, res, next) => {
  const id = xss(req.body.id)
  const name = xss(req.body.name)
  const avatar = xss(req.body.avatar)
  const usertag = xss(req.body.usertag)
  const title = xss(req.body.title)
  const tags = xss(req.body.tags)
  const content = xss(req.body.content)
  const cover = xss(req.body.cover)
  const canonical = xss(req.body.canonical)
  const series = xss(req.body.series)
  const postType = xss(req.body.type)
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const postQuery = `INSERT INTO dev_posts (user_id, user_name, user_avatar, user_tag, title, tags, content, cover_image, canonical, series, post_status, created_at) VALUES('${id}', '${name}', '${avatar}', '${usertag}', '${title}', '${tags}', '${content}', '${cover}', '${canonical}', '${series}', '${postType}', '${createdAt}')`
  connection.query(postQuery, function (err, rows) {
    if (err) consola.error(err)
    else res.redirect(req.get('referer'))
  })
})
// multerでファイルアップロード機能を作成
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
// アップロード後sharpで画像のリサイズをしている
router.post('/fileupload', upload.single('thumbnail'), function (req, res) {
  const filepath = './static' + req.body.fileupload
  sharp(filepath).resize(1000, 420).toBuffer(function (err, info) {
    fs.writeFile(filepath, info, function (e) {
      if (err) return consola.error(err)
      res.redirect(req.get('referer'))
    })
  })
})
router.post('/fileupload_body', upload.single('thumbnail'), function (req, res) {
  const filepath = './static' + req.body.fileupload
  sharp(filepath).resize(680).toBuffer(function (err, info) {
    fs.writeFile(filepath, info, function (e) {
      if (err) return consola.error(err)
      res.redirect(req.get('referer'))
    })
  })
})
// 画像の削除
router.post('/remove_file', function (req, res) {
  const file = './static' + req.body.filepath
  fs.unlink(file, (err) => {
    if (err) throw err
    res.redirect(req.get('referer'))
  })
})
// 公開記事の取得
router.get('/get_post', (req, res, next) => {
  const clientQuery = 'SELECT * FROM dev_posts WHERE post_status = "publish" ORDER BY id DESC'
  connection.query(clientQuery, function (err, rows) {
    const users = rows
    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      })
    } else {
      res.json(users)
    }
  })
})
// 新規8件を取得
router.get('/get_new_post', (req, res, next) => {
  const clientQuery = 'SELECT * FROM dev_posts WHERE post_status = "publish" ORDER BY id DESC LIMIT 8'
  connection.query(clientQuery, function (err, rows) {
    const users = rows
    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      })
    } else {
      res.json(users)
    }
  })
})
// slugに応じた記事の取得、ここはこのままだとエラーになる要因があるので、改善が必要
router.get('/get_article/:slug', (req, res, next) => {
  const title = req.params.slug.replace('-', ' ')
  const clientQuery = `SELECT * FROM dev_posts WHERE post_status = 'publish' AND title = '${title}' ORDER BY id DESC`
  connection.query(clientQuery, function (err, rows) {
    const users = rows
    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      })
    } else {
      res.json(users)
    }
  })
})
export default router
