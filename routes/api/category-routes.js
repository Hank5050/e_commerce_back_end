const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const category = await Category.findAll({
      include: [{ model: Product, through: "category_id"}]
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }

  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      
      include: [{ model: Product, through: "category_id"}]

    });

    if (!category) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
 
});

router.post('/', (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!category) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;
