import { Router } from 'express'
import consola from 'consola'
import xss from 'xss'
import moment from 'moment'
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
export default router
