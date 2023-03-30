import axios from "axios";

const baseUrl =
    "https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true";

class ListInfectados2MUseCase {
    async execute() {
        const { data } = await axios.get(baseUrl);

        const acima2M = data.infectedByRegion.filter(
            (dt) => dt.count > 2000000
        );

        return acima2M;
    }
}

export { ListInfectados2MUseCase };
