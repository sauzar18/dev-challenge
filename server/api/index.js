import { Router } from 'express'
import post from './posts'
import register from './register'
import cool from './cool'
import like from './like'
import comment from './comment'
const router = Router()

router.use(post)
router.use(register)
router.use(cool)
router.use(like)
router.use(comment)
export default router
