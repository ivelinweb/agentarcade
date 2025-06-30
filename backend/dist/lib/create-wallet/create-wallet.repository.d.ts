import { Wallet } from './wallet.schema';
import { Model } from 'mongoose';
export declare class CreateWalletRepository {
    private walletModel;
    constructor(walletModel: Model<Wallet>);
    create(wallet: any): Promise<void>;
}
