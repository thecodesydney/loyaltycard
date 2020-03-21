import { Router } from 'express'
import OwnerController from '../controllers/OwnerController'

const router = Router()

router
  .route('/')
  .get(OwnerController().getAllOwners)
  .post(OwnerController().createOwner)

export default router
