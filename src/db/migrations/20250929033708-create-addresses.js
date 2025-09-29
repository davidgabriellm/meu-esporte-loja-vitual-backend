"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("addresses", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      userId: {
        type: Sequelize.UUID,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
      },
      street: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
      state: { type: Sequelize.STRING },
      postalCode: { type: Sequelize.STRING },
      isDefault: { type: Sequelize.BOOLEAN, defaultValue: false },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("addresses");
  },
};
