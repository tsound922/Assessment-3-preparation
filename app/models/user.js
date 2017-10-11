var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//Form data validation
var UserSchema = new Schema({
	username: {type: String, lowercase:true, required:true, unique:true},
	password: {type: String, required:true},
	email: {type: String, lowercase:true, required:true, unique:true},
	admin:{type:Boolean, default:false},
	temporary:{type:String, required: false}
});

UserSchema.pre('save',function(next){
	var user = this;
	bcrypt.hash(user.password,null,null,function (err,hash) {
		if(err) return next(err);
		user.password = hash;
        next();
    });

});
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
//Exporting data to the model User
module.exports = mongoose.model('User',UserSchema);

//bcrypt.compareSync("bacon", hash); // true