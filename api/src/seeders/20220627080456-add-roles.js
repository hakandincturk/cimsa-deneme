'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Roles', [ 
			{
				name: 'aip-role-one',
				utype: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'aip-role-two',
				utype: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'aip-role-three',
				utype: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'cua-role-one',
				utype: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'cua-role-two',
				utype: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'cua-role-three',
				utype: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'hr-role-one',
				utype: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'hr-role-two',
				utype: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			}
      
		], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Roles', null, {});
	}
};
