import prisma from "@/lib/prisma";
import { ParentUser, ParentUserCreationResponse } from "@customTypes/parentUser";

/**
 * Creates a new parentUser in the database.
 * @param {ParentUser} parentUser - The parentUser object to be created.
 * @returns {Promise<ParentUser>} A promise that resolves to the created parentUser.
 * @throws {Error} If the user already exists or if there's a problem in creation.
 */
async function create(email: string, phone: string, name: string): Promise<ParentUserCreationResponse> {
    try {
        const existingUsers = await prisma.parentUser.findMany({
            where: {
                email: email,
                phone: phone,
            },
        });

        if (existingUsers.length > 0) {
            return Promise.reject(new Error("User already exists"));
        }

        const newUser = await prisma.parentUser.create({
            data: {
                email: email,
                phone: phone,
                name: name,
                organization: { connect: { id: "1" } },
                accountVerified: false,
            },
            include: {
                organization: true,
            }
        }) as ParentUserCreationResponse;

        return newUser;
    } catch (error) {
        return Promise.reject(error);
    }
}

export { create };
