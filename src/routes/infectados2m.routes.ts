import { Router } from "express";

import { listInfectados2MController } from "../modules/useCases/listInfectados2M";

const infectadosRoutes = Router();

infectadosRoutes.get("/api/infectados2m", (request, response) => {
    return listInfectados2MController.handle(request, response);
});

export { infectadosRoutes };
