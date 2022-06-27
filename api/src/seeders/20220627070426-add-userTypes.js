'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('UserTypes', [ 
			{
				user_id: 1,
				utype_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		  },
			{
				user_id: 2,
				utype_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
		  },
			{
				user_id: 3,
				utype_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		  },
			{
				user_id: 3,
				utype_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
		  }
		], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('UserTypes', null, {});
	}
};
