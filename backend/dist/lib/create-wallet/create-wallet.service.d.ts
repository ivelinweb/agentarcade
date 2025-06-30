import { CreateWalletRepository } from './create-wallet.repository';
export declare class CreateWalletService {
    private readonly createWalletRepository;
    constructor(createWalletRepository: CreateWalletRepository);
    createWallet(userAddress: string): Promise<void>;
}
