import { Request, Response } from "express";

import { ListInfectados2MUseCase } from "./ListInfectados2MUseCase";

class ListInfectados2MController {
    constructor(
        private listInfectados2MUseCaseUseCase: ListInfectados2MUseCase
    ) {
        // null
    }

    async handle(request: Request, response: Response) {
        const livros = await this.listInfectados2MUseCaseUseCase.execute();

        return response.json(livros);
    }
}

export { ListInfectados2MController };
