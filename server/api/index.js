import { Router } from 'express'
import post from './posts'
const router = Router()

router.use(post)
export default router
