import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { PackageSchema } from '../models/Package'
import { ShipSchema } from '../models/Ship'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Packages = mongoose.model('Package', PackageSchema)
  Ships = mongoose.model('Ship', ShipSchema)
}

export const dbContext = new DbContext()
