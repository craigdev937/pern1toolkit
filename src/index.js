import "dotenv/config";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { trim } from "./middleware/trim.js";
import { MidError } from "./middleware/ErrorMid.js";
import { PlayerRt } from "./routes/PlayerRt.js";

(async () => {
    const app = express();
    app.use(helmet());

    // CORS Setup
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATCH, DELETE");
            return res.status(200).json({ "status message": "OK" });
        };
        next();
    });

    // Middleware
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(logger("dev"));
    app.use(trim);
    app.use("/api/players", PlayerRt);

    // Error Handling and Port
    app.use(MidError.notFound);
    app.use(MidError.errorHandler);
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();


