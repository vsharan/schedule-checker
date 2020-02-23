export class CreateScheduleDto {
    readonly title: string;
    readonly from: Date;
    readonly to: Date
    readonly userId: string;
}