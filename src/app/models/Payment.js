import { Model, DataTypes } from "sequelize";

class Payment extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        orderId: DataTypes.UUID,
        method: DataTypes.STRING,
        amount: DataTypes.DECIMAL(10, 2),
        status: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Payment",
        tableName: "Payments",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: "orderId" });
  }
}

export default Payment;
