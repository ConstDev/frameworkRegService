import { IUserData } from './IUserData';
export interface IStep {
    setUserData(_data: IUserData): void,
    doRegistration(): void,
    storeData(): void
}