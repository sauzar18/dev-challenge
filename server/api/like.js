import { Router } from 'express'
import consola from 'consola'
import xss from 'xss'
import moment from 'moment'
import connection from '../mysqlConnect'
const router = Router()
router.post('/like', (req, res, next) => {
  const articleId = xss(req.body.comment)
  const userId = xss(req.body.user)
  const sendAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const postQuery = `INSERT INTO dev_likes (comment_id, user_id, created_at) VALUES('${articleId}', '${userId}', '${sendAt}')`
  connection.query(postQuery, function (err, rows) {
    if (err) consola.error(err)
    else res.redirect(req.get('referer'))
  })
})
router.get('/likeData', (req, res, next) => {
  const favoriteQuery = 'SELECT * FROM dev_likes'
  connection.query(favoriteQuery, function (err, rows) {
    const users = rows
    if (err) {
      res.json({ Error: true, Message: 'Error executing MySQL query' })
    } else {
      res.json(users)
    }
  })
})
router.post('/likeDelete', (req, res, next) => {
  const getID = xss(req.body.user)
  const articleID = xss(req.body.comment)
  const deleteQuery = `DELETE FROM dev_likes WHERE user_id = ${getID} AND comment_id = ${articleID}`
  connection.query(deleteQuery, function (err, rows) {
    if (err) consola.ready(err)
    else res.redirect(req.get('referer'))
  })
})
export default router
