import db from '../../src/models';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../../src/config/envKeys';

class CheckPermission{

	static checkPermission (permName){
		return async (req, res, next) => {
			try {
				
				const token = req.headers.authorization.split(' ')[1];
				const tokenData = await jwt.verify(token, JWT_SECRET);

				const result = await db.Users.findOne({
					where: {id: tokenData.user_id},
					attributes: [ 'username' ],
					include: {
						model: db.Roles,
						attributes: [ 'id', 'name' ],
						include: {
							model: db.UTypes
						}
					}
				});

				res.status(200).json({type: true, message: 'sss', data: result});

				if (result.Roles.length === 0) res.status(401).json({type: false, message: 'access denied 2'});
				else next();
			}
			catch (error) {
				res.json({type: false, message: error.message});
			}
		};
	}

}

export default CheckPermission;