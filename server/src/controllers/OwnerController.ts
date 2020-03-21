import { Request, Response, NextFunction } from 'express'

const OwnerController = () => {
  const createOwner = (req: Request, res: Response, next: NextFunction) => {
    console.log('Create New Owner')
  }

  const getAllOwners = (req: Request, res: Response, next: NextFunction) => {
    console.log('All All Owners GET request')
  }

  return { createOwner, getAllOwners }
}

export default OwnerController
