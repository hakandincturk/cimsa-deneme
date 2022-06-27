import db from '../../src/models';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../../src/config/envKeys';

class CheckUserType{

	static checkUserType (type_name){
		return async (req, res, next) => {
			try {
				
				const token = req.headers.authorization.split(' ')[1];
				const tokenData = await jwt.verify(token, JWT_SECRET);

				const typeData = await db.UTypes.findOne({
					where: {name: type_name},
					attributes: [ 'id' ]
				});

				const result = await db.Users.findOne({
					where: {id: tokenData.user_id},
					attributes: [ 'username' ],
					include: {
						model: db.UTypes,
						where: { id: typeData.id }
					}
				});
				
				if ( !result ) res.status(401).json({type: false, message: 'access denied 3'});
				else next(); 
			}
			catch (error) {
				res.json({type: false, message: error.message});
			}
		};
	}

}

export default CheckUserType;