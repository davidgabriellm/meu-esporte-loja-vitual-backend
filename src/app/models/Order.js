import { Model, DataTypes } from "sequelize";

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
        userId: DataTypes.UUID,
        total: DataTypes.DECIMAL(10, 2),
        status: DataTypes.STRING
      },
      {
        sequelize,
        modelName: "Order",
        tableName: "Orders" 
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId" });
    this.hasMany(models.OrderItem, { foreignKey: "orderId" });
  }
}

export default Order;