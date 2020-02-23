import { Document } from 'mongoose';

export interface Schedule extends Document {
    readonly title: string;
    readonly startTime: Date;
    readonly endTime: Date
    readonly userId: string;
}