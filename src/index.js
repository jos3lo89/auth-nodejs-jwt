import app from "./app.js";
import { PORT } from "./config.js";
import connectedDB from "./db.js";

const appOn = () => {
  try {
    app.listen(PORT, () => console.log(`server on por ${PORT}`));
    connectedDB();
  } catch (error) {
    console.log(error.message);
  }
};


appOn()