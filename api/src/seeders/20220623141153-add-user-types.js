'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert('UserTypes', [ 
			{
				name: 'alt-isveren-programi',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'usta-analiz',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'hr',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'mavi-yaka',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {});
	},

	async down (queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('UserTypes', null, {});

	}
};
