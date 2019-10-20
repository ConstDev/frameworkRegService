import { IStep } from '../interfaces/IStep';
import { IUserData } from '../interfaces/IUserData';

export class BlaBlaCar implements IStep  {
    private data: IUserData;
    constructor() {
        this.data = null;
        console.log('Initiate Bla bla car');
    }

    setUserData(_data: IUserData): void {
        this.data = _data;
        console.log('set user data');
    }

    doRegistration(): void {
        console.log('do registration');
    }
    
    storeData(): void {
        console.log('store data');
    }
}