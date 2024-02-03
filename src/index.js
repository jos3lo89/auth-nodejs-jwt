import app from "./app.js";
import { PORT } from "./config.js";
import connectedDB from "./db.js";


app.listen(PORT, () => console.log(`server on por ${PORT}`));
connectedDB()