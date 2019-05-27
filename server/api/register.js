import { Router } from 'express'
import consola from 'consola'
import xss from 'xss'
import moment from 'moment'
import connection from '../mysqlConnect'
const router = Router()
router.post('/register', (req, res, next) => {
  const id = xss(req.body.id)
  const name = xss(req.body.name)
  const avatar = xss(req.body.avatar)
  const usertag = xss(req.body.usertag)
  const github = xss(req.body.github)
  const twitter = xss(req.body.twitter)
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const postQuery = `INSERT INTO dev_users (user_id, user_name, user_avatar, user_tag, twitter, github, created_at) VALUES('${id}', '${name}', '${avatar}', '${usertag}', '${github}', '${twitter}', '${createdAt}')`
  connection.query(postQuery, function (err, rows) {
    if (err) consola.error(err)
    else res.redirect('/')
  })
})
export default router
