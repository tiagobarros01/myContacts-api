const { v4 } = require('uuid');

const uuid = v4;

let contacts = [
  {
    id: uuid(),
    name: 'Tiago',
    email: 'Tiago@teste.com',
    phone: '132772763',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'lais',
    email: 'lais@teste.com',
    phone: '132772763',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactsRepository();
