import { userData } from '../data/userData';
import { listServices } from '../data/listServices';
import { serviceStore } from '../data/serviceStore';

for(let user of userData) {
    for(let serviceName of listServices) {
        const service = serviceStore[serviceName];
        service.setUserData(user);
        service.doRegistration();
        service.storeData();
    }
}
