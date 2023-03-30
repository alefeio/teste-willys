import { ListInfectados2MController } from "./ListInfectados2MController";
import { ListInfectados2MUseCase } from "./ListInfectados2MUseCase";

const listInfectados2MUseCase = new ListInfectados2MUseCase();
const listInfectados2MController = new ListInfectados2MController(
    listInfectados2MUseCase
);

export { listInfectados2MController };
