var IIDependency = require("../../InhertedInterface/Dependency");

//Adapted for MongoDB
module.exports = class DAO extends IIDependency {
    static AsyncInitMustBeCalled = false;
    
    //properties
    Db;
    ObjectId;
    Collections;
    //methods
    SetDatabase(db) {
        this.Db = db.Connection;
        this.ObjectId = db.ObjectId
        this.Collections = {
            //mongo db collections
        }
    }

}