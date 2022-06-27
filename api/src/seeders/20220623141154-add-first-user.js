'use strict';

const md5 = require('md5');

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

		await queryInterface.bulkInsert('Users', [ {
			username: 'usr-aip',
			name: 'userName1',
			surname: 'userSurname',
			email: 'usr-aip@g.co',
			password: md5('123456'),
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			username: 'usr-cua',
			name: 'userName2',
			surname: 'userSurname',
			email: 'usr-cua@g.co',
			password: md5('123456'),
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			username: 'usr-cua-aip',
			name: 'userName3',
			surname: 'userSurname',
			email: 'usr-cua-aip@g.co',
			password: md5('123456'),
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
		await queryInterface.bulkDelete('Users', null, {});
	}
};
