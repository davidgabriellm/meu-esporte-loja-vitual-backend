"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
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
      total: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0 },
      status: { type: Sequelize.STRING, defaultValue: "pending" },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
   await queryInterface.dropTable('orders');
  },
};
