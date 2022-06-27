'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Permissions', [ 
			{
				name: 'aip-permission-one',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 1
			}, 
			{
				name: 'aip-permission-two',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 1
			}, 
			{
				name: 'aip-permission-three',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 1
			}, 
			{
				name: 'aip-permission-four',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 1
			},
			{
				name: 'cua-permission-one',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 2
			}, 
			{
				name: 'cua-permission-two',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 2
			}, 
			{
				name: 'cua-permission-three',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 2
			}, 
			{
				name: 'cua-permission-four',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 2
			},
			{
				name: 'hr-permission-one',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 3
			}, 
			{
				name: 'hr-permission-two',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 3
			}, 
			{
				name: 'hr-permission-three',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 3
			}, 
			{
				name: 'hr-permission-four',
				createdAt: new Date(),
				updatedAt: new Date(),
				utype: 3
			}
		
		], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Permissions', null, {});

	}
};
