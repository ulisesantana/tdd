/**
 * Created by ulisesantana on 4/03/17.
 */
module.exports = class PasswordValidator{
  
  validate(password){
    this.password = password;
    return this.minChars() &&
            this.hasUppercase() &&
            this.hasLowercase() &&
            this.hasANumber() &&
            this.hasUnderscore();
  }
  
  minChars(){
    if(this.password.length >= 6){
      return true;
    } else {
      return false;
    }
  }
  
  hasUppercase(){
    for( let char of this.password ){
      let patt = new RegExp('[A-Z]');
      if ( patt.test(char) ) return true;
    }
    return false;
  }
  
  hasLowercase(){
    for( let char of this.password ){
      let patt = new RegExp('[a-z]');
      if ( patt.test(char) ) return true;
    }
    return false;
  }
  
  hasUnderscore(){
    for( let char of this.password ){
      let patt = new RegExp('_');
      if ( patt.test(char) ) return true;
    }
    return false;
  }
  
  hasANumber(){
    for( let char of this.password ){
      if ( !isNaN(char) ) return true;
    }
    return false;
  }
  
  
  
  
  
  
};