const CategoriesRepository = require('../Repositories/CategoriesRepository');

class CategoryController {
  async index(req, res) {
    const categories = await CategoriesRepository.findAll();

    res.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    return res.json(category);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    res.status(201).json(category);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'name is required' });
    }

    const categoryAlreadyExists = await CategoriesRepository.findById(id);

    if (!categoryAlreadyExists) {
      return res.status(400).json({ error: 'category is required' });
    }

    const categoryName = await CategoriesRepository.findByName({ name });

    if (name.toLocaleLowerCase() === categoryName?.toLocaleLowerCase()) {
      return res.status(400).json({ error: 'This name already exists' });
    }

    const category = await CategoriesRepository.update(id, { name });

    return res.json(category);
  }

  async delete(req, res) {
    const { id } = req.params;

    await CategoriesRepository.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new CategoryController();
