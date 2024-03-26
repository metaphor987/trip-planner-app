import mongoose from 'mongoose';

const planSchema = mongoose.Schema(
  {
    // TODO: problem with Date type list
    dates: [Date, Date],
    destination: String,
    schedule: [{
        date: Date,
        place: String,
        notes: String,
        cost: Number
    }],
    totalCost: Number,
  },
);

export const Plan = mongoose.model('Plan', planSchema);