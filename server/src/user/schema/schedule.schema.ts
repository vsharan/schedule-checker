import * as mongoose from 'mongoose';

export const ScheduleSchema = new mongoose.Schema({
    title: String,
    startTime: { type: Date, default: Date.now },
    endTime: { type: Date, default: Date.now },
    scheduledDate: { type: Date, default: Date.now },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});