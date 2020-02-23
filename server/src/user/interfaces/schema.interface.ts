import { Document } from 'mongoose';

export interface Schedule extends Document {
    readonly title: string;
    readonly from: Date;
    readonly to: Date
    readonly userId: string;
}