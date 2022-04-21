import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PackageSchema = new Schema(
  {
    recipient: { type: String, required: true },
    address: { type: String, required: true },
    weight: { type: Number, min: -10, max: 10000 },
    sender: { type: String },
    priority: { type: String, enum: ['BASIC', 'FIRST-CLASS', 'EXPRESS'], uppercase: true, default: 'BASIC' },
    delivered: { type: Boolean, default: false },
    shipId: { type: Schema.Types.ObjectId, ref: 'Ship' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PackageSchema.virtual('ship', {
  localField: 'shipId',
  ref: 'Ship',
  foreignField: '_id',
  justOne: true
})
