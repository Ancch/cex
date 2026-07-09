import express, { Request, Response } from "express"
import { safeParse } from "zod";
import { signupSchema } from "./schema";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.post("/signup", (req: Request, res: Response) => {
    const input = signupSchema.safeParse(req.body)
    if (!input.success) {
        const errMes = input.error.issues.map((e) => e.message);
        res.status(411).json({
            message: signupSchema.shape,
            error: errMes,
            
        });
        return;
    } 
    const { username, password } = req.body;

    try {
        
    } catch (err) {

    }
})
 
app.post("/signin", (req: Request, res:Response) => {
    const input = signupSchema.safeParse(req.body);
    if (!input.success) {
    const errorMessage = input.error.issues.map((e) => e.message);
    res.status(411).json({
      message: errorMessage || "Invalid format",
      error: errorMessage,
    });
    return;
    }

    const { username, password} = req.body;
    
})




app.listen(PORT, () => console.log(`cex running on port ${PORT}`));