import { Router } from 'express'
import post from './posts'
import register from './register'
import cool from './cool'
const router = Router()

router.use(post)
router.use(register)
router.use(cool)
export default router
