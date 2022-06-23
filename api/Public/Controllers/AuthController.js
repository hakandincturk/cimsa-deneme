
import AuthService from '../Services/AuthService';
import AuthValidation from '../Validation/AuthValidation';

class AuthController{

	static async register(req, res){
		try {

			const validation = await AuthValidation.registerValidation(req.body);

			if (!validation.type)
				res.json({type: false, message: validation.message});
			else {
				const result = await AuthService.register(req.body);

				if (result.type) res.json({type: true, message: result.message});
				else res.json({type: false, message: result.message});
			}
		}
		catch (error) {
			res.json({type: false, message: error.message});
		}
	}

	static async login(req, res){
		try {

			const validation = await AuthValidation.loginValidation(req.body);

			if (!validation.type)
				res.json({type: false, message: validation.message});
			else {
				const result = await AuthService.login(req.body);

				if (result.type) res.json({type: true, message: result.message, data: {token: result.token}});
				else res.json({type: false, message: result.message});
			}

		}
		catch (error) {
			res.json({type: false, message: error.message});
		}
	}

	static async health( req, res ){
		console.log('asd');
		res.json({type: true, message: 'AuthRoute working successfuly'});
	}

}

export default AuthController;