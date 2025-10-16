import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt"; // mais seguro no Windows

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: DataTypes.VIRTUAL, 
          allowNull: false,       
        },
        password_hash: {
          type: DataTypes.STRING,
          allowNull: false,     
        },
        avatar: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
      }
    );

    
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "user_id" });
    this.hasMany(models.Order, { foreignKey: "user_id" });
    this.hasMany(models.CartItem, { foreignKey: "user_id" });
  }
}

export default User;
