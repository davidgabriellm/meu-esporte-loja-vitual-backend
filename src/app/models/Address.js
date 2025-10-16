import { Model, DataTypes } from "sequelize";

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
        user_id: DataTypes.UUID,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        is_default: DataTypes.BOOLEAN
      },
      {
        sequelize,
        name: {
          singular: "address",
          plural: "addresses",
        },
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id" });
  }
}

export default Address;
