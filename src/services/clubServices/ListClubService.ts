import { ClubsRepositories } from "../../repositories/ClubsRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

class ListClubService {
    async execute(user_id: string) {

        const usersRepository = getCustomRepository(UsersRepositories);

        const clubsRepository = getCustomRepository(ClubsRepositories);

        const { admin } = await usersRepository.findOne(user_id);

        if (admin) {
            const clubs = await clubsRepository.find();

            return { clubs };
        }

        const clubs = await clubsRepository.find({
            where: {
                approved: true
            }
        });

        return { clubs };
    }
}

export { ListClubService };