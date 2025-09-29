import { Model, DataTypes } from "sequelize";

class CartItem extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
        userId: DataTypes.UUID,
        productId: DataTypes.UUID,
        quantity: DataTypes.INTEGER
      },
      {
        sequelize,
         name: {
          singular: "cartItem",
          plural: "cartItems",
        },
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId" });
    this.belongsTo(models.Product, { foreignKey: "productId" });
  }
}

export default CartItem;
