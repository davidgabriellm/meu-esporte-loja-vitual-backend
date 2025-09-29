"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cartItems", {
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
      productId: {
        type: Sequelize.UUID,
        references: { model: "products", key: "id" },
        onDelete: "CASCADE",
      },
      quantity: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cartItems');
  },
};
