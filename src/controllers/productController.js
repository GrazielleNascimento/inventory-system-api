import { models } from '../models/initModels.js';

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;
    const newProduct = await models.Product.create({
      name,
      description,
      price,
      categoryId,
    });
    res
      .status(201)
      .json({ message: 'Product created successfully', newProduct });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Failed to create product', details: error.message });
  }
};

/* export const getProducts = async (req, res) => {
  try {
    const products = await models.Product.findAll();
    res.status(200).json({ message: 'Retrieved products', products });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Not possible getProducts', details: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await models.Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({
      error: 'Not possible getProductById',
      details: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;
    const [updated] = await models.Product.update(
      { name, description, price, categoryId },
      { where: { id: req.params.id }, returning: true }
    );

    if (updated) {
      const updatedProduct = await models.Product.findByPk(req.params.id);
      res
        .status(200)
        .json({ message: 'Product updated successfully', updatedProduct });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Failed to update product', details: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await models.Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.destroy();
    return res.status(204).send();
  } catch (error) {
    res.status(400).json({
      error: 'Not possible deleteProduct',
      details: error.message,
    });
  }
}; */
