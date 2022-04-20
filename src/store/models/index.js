import VuexORM from "@vuex-orm/core";

import User from "./User";
import Admin from "./Admin";
import AdmissionOfficer from "./AdmissionOfficer";
import Client from "./Client";

const Database = new VuexORM.Database();
Database.register(User);
Database.register(Admin);
Database.register(AdmissionOfficer);
Database.register(Client);


export {
    Database,
    User,
    Admin,
    AdmissionOfficer,
    Client,
}