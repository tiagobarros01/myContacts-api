const ContactsRepository = require('../Repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(contact);
  }

  store() {}

  update() {}

  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);

    // 204: OK, but NO has Content
    res.sendStatus(204);
  }
}

module.exports = new ContactController();
