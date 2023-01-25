import { randomUUID } from "crypto";

let contacts = [
    {
        id: randomUUID(),
        name: "Tiago",
        email: "tiago@test.com",
        phone: "123563454",
        categoryId: randomUUID(),
    },
    {
        id: randomUUID(),
        name: "Lais",
        email: "lais@test.com",
        phone: "123563454",
        categoryId: randomUUID(),
    },
];

class ContactsRepository {
    async findMany() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }
    async findById(id) {
        return new Promise((resolve) => {
            resolve(contacts.find((contact) => contact.id === id));
        });
    }
    async delete(id) {
        return new Promise((resolve) => {
            resolve(
                (contacts = contacts.filter((contact) => contact.id !== id))
            );
        });
    }
}

export default new ContactsRepository();
