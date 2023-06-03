import express from "express"
const app = express();
import cors from "cors";
import { handler } from "./build/handler.js";
app.use(express.static('public'));

app.use(cors());
app.use(handler);

const port = 10003;
app.listen(port, () => { 
   console.log(`server is on running on port ${port}`);
})