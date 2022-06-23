
class AuthController{

	static async health( req, res ){
		console.log('asd');
		res.json({type: true, message: 'AuthRoute working successfuly'});
	}

}

export default AuthController;