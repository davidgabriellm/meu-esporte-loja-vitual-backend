import * as Yup from "yup";
import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";

class CartController {
  async addItem(req, res) {
    const schema = Yup.object().shape({
      product_id: Yup.string().uuid().required(),
      quantity: Yup.number().integer().min(1).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation failed." });
    }

    const { user_id } = req.params;
    const { product_id, quantity } = req.body;

    const product = await Product.findByPk(product_id);
    if (!product) return res.status(404).json({ error: "Product not found." });

    const item = await CartItem.create({ user_id, product_id, quantity });
    return res.status(201).json(item);
  }

  async list(req, res) {
    const { user_id } = req.params;
    const items = await CartItem.findAll({
      where: { user_id },
      include: [{ model: Product, attributes: ["name", "price", "image_url"] }],
    });
    return res.json(items);
  }

  async removeItem(req, res) {
    const { id } = req.params;
    const item = await CartItem.findByPk(id);
    if (!item) return res.status(404).json({ error: "Item not found." });

    await item.destroy();
    return res.status(204).send();
  }
}

export default new CartController();
