'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Roles', [ 
			{
				name: 'aip-role-one',
				utype_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'aip-role-two',
				utype_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'aip-role-three',
				utype_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'cua-role-one',
				utype_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'cua-role-two',
				utype_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'cua-role-three',
				utype_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'hr-role-one',
				utype_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'hr-role-two',
				utype_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			}
      
		], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Roles', null, {});
	}
};
