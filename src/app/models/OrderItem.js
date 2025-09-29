import { Model, DataTypes } from "sequelize";

class OrderItem extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
        orderId: DataTypes.UUID,
        productId: DataTypes.UUID,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL(10, 2)
      },
      {
        sequelize,
         name: {
          singular: "orderItem",
          plural: "orderItems",
        }, 
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: "orderId" });
    this.belongsTo(models.Product, { foreignKey: "productId" });
  }
}

export default OrderItem;
