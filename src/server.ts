import "module-alias/register";
// ---------
import app from "@/routers";

app.listen(3000, () => {
  console.log("running on port 3000");
});
