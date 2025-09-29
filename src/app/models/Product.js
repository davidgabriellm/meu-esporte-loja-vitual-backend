import { Model, DataTypes } from "sequelize";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL(10, 2),
        stock: DataTypes.INTEGER,
        imageUrl: DataTypes.STRING,
        categoryId: DataTypes.UUID
      },
      {
        sequelize,
         name: {
          singular: "product",
          plural: "products",
        },
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: "categoryId" });
    this.hasMany(models.OrderItem, { foreignKey: "productId" });
  }
}

export default Product;
