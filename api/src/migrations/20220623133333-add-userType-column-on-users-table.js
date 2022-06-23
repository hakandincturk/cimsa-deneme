'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.addColumn('Users', 'user_type_id', {
			type: Sequelize.INTEGER,
			defaultValue: 0,
			allowNull: false
		});
	},

	async down (queryInterface, Sequelize) {
		queryInterface.removeColumn('Users', 'user_type_id');

	}
};
