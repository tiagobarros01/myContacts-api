const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM categories WHERE id = $1', [
      id,
    ]);

    return row;
  }

  async findByName({ name }) {
    const [row] = await db.query('SELECT * FROM categories WHERE name = $1', [
      name,
    ]);

    return row?.name;
  }

  async create({ name }) {
    const [row] = await db.query(
      `
      INSERT INTO categories (name)
      VALUES($1)
      RETURNING *`,
      [name],
    );

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM categories WHERE id = $1', [
      id,
    ]);

    return deleteOp;
  }

  async update(id, { name }) {
    const [row] = await db.query(
      `
      UPDATE categories
      SET name = $1 WHERE id = $2
      RETURNING *`,
      [name, id],
    );

    console.log(row);

    return row;
  }
}

module.exports = new CategoriesRepository();
