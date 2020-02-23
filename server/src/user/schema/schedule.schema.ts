import * as mongoose from 'mongoose';

export const ScheduleSchema = new mongoose.Schema({
    title: String,
    from: { type: Date, default: Date.now },
    to: { type: Date, default: Date.now },
    scheduledDate: { type: Date, default: Date.now },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});