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

  async store(req, res) {
    const {
      email, name, category_id, phone,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'name is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const contact = await ContactsRepository.create({
      email,
      name,
      category_id,
      phone,
    });

    res.json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      email, name, category_id, phone,
    } = req.body;

    const contactIdExists = await ContactsRepository.findById(id);

    if (!contactIdExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return res.status(400).json({ error: 'name is required' });
    }

    const contactEmailExists = await ContactsRepository.findByEmail(email);

    if (contactEmailExists && contactEmailExists.id !== id) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const contact = await ContactsRepository.update(id, {
      email,
      name,
      category_id,
      phone,
    });

    res.json(contact);
  }

  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);

    // 204: OK, but has NO Content
    res.sendStatus(204);
  }
}

module.exports = new ContactController();
