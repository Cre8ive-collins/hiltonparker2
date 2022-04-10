import VuexORM from "@vuex-orm/core";

import User from "./User";

const Database = new VuexORM.Database();
Database.register(User);


export {
    Database,
    User
}