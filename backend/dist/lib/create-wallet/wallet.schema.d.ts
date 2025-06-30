export declare class Wallet {
    userAddress: string;
    walletAddress: string;
    walletPrivateKey: string;
    contractAddress?: string;
    network?: string;
}
export declare const walletSchema: import("mongoose").Schema<Wallet, import("mongoose").Model<Wallet, any, any, any, import("mongoose").Document<unknown, any, Wallet, any> & Wallet & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Wallet, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Wallet>, {}> & import("mongoose").FlatRecord<Wallet> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
