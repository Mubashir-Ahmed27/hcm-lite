import { createApp, connectDb } from './app.js';
await connectDb(); const app=createApp(); const port=Number(process.env.PORT||4000); app.listen(port,()=>console.log(`HCM Lite API listening on ${port}`));
