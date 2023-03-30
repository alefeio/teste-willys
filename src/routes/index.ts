import { Router } from "express";

import { infectadosRoutes } from "./infectados2m.routes";

const router = Router();

router.use("/", infectadosRoutes);

export { router };
