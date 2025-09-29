import { Model, DataTypes } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        name: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          unique: true,
        },
        password_hash: DataTypes.STRING,
        avatar: DataTypes.STRING,
      },
      {
        sequelize,
        name: {
          singular: "user",
          plural: "users",
        },
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "userId" });
    this.hasMany(models.Order, { foreignKey: "userId" });
    this.hasMany(models.CartItem, { foreignKey: "userId" });
  }
}

export default User;
