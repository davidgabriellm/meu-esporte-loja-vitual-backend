"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      stock: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      imageUrl: { type: Sequelize.STRING, allowNull: true },
      categoryId: {
        type: Sequelize.UUID,
        references: { model: "categories", key: "id" },
        onDelete: "SET NULL",
        allowNull: true,
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  },
};
