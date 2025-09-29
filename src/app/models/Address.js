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
        userId: DataTypes.UUID,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        country: DataTypes.STRING,
        isDefault: DataTypes.BOOLEAN
      },
      {
        sequelize,
        modelName: "Address",
        tableName: "Addresses" 
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId" });
  }
}

export default Address;
