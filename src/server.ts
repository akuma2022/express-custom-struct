import "module-alias/register";
import app from "@/routers";
import dotenv from "dotenv";

dotenv.config();
app.listen(3000, () => {
  console.log("running on port 3000");
});
