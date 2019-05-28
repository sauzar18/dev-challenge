import { Router } from 'express'
import consola from 'consola'
import xss from 'xss'
import moment from 'moment'
import connection from '../mysqlConnect'
const router = Router()
router.post('/comment', (req, res, next) => {
  const id = xss(req.body.article_id)
  const parent = xss(req.body.parent_id)
  const userId = xss(req.body.user_id)
  const userName = xss(req.body.user_name)
  const avatar = xss(req.body.avatar)
  const userTag = xss(req.body.user_tag)
  const comment = xss(req.body.comment)
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const postQuery = `INSERT INTO dev_comments (parent_id, article_id, user_id, user_name, user_avatar, user_tag, comment, created_at) VALUES('${parent}', '${id}', '${userId}', '${userName}', '${avatar}', '${userTag}', '${comment}', '${createdAt}')`
  connection.query(postQuery, function (err, rows) {
    if (err) consola.ready(err)
    else res.redirect(req.get('referer'))
  })
})
router.get('/comment/:id', (req, res, next) => {
  const slugQuery = req.params.id
  const clientQuery = `SELECT * FROM dev_comments WHERE article_id = "${slugQuery}"`
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
