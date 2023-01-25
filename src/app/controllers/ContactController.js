import ContactsRepository from "../repositories/ContactsRepository.js";

class ContactController {
    // Get all registers
    async index(request, response) {
        const contacts = await ContactsRepository.findMany();

        response.json(contacts);
    }
    // Get one register
    async show(request, response) {
        const { id } = request.params;

        const contact = await ContactsRepository.findById(id);

        if (contact === undefined) {
            return response.status(404).json({ error: "User not found" });
        }

        response.json(contact);
    }
    // Create a new register
    store(request, response) {}
    // Update a register
    update(request, response) {}
    // Delete a register
    async delete(request, response) {
        const { id } = request.params;

        const contactExists = await ContactsRepository.findById(id);

        if (contactExists === undefined) {
            return response.status(404).json({ error: "User not found" });
        }

        const [contacts] = await ContactsRepository.delete(id);

        response.status(200).json(contacts);
    }
}

export default new ContactController();
