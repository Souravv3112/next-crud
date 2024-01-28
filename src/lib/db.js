const { usernamedb, password } = process.env;
export const connectionStr = "mongodb+srv://" + usernamedb + ":" + password + "@cluster0.xgk2g5m.mongodb.net/?retryWrites=true&w=majority"