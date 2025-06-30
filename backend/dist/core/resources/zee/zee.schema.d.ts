export declare class Zee {
    zeeName: string;
    zeeDescription: string;
    goal: string;
    agents: Array<string>;
}
export declare const ZeeSchema: import("mongoose").Schema<Zee, import("mongoose").Model<Zee, any, any, any, import("mongoose").Document<unknown, any, Zee, any> & Zee & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Zee, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Zee>, {}> & import("mongoose").FlatRecord<Zee> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
