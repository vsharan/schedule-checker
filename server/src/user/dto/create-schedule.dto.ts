export class CreateScheduleDto {
    readonly title: string;
    readonly startTime: Date;
    readonly endTime: Date
    readonly userId: string;
}