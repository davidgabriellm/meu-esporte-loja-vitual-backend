"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orderItems", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      orderId: {
        type: Sequelize.UUID,
        references: { model: "orders", key: "id" },
        onDelete: "CASCADE",
      },
      productId: {
        type: Sequelize.UUID,
        references: { model: "products", key: "id" },
        onDelete: "SET NULL",
      },
      quantity: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
   await queryInterface.dropTable('orderItems');
  },
};
