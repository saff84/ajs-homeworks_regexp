export default class Validator {
  
    constructor(name) {
        this.name = name
    }
    
validateName(){
  return /^[a-z][\w-]*[a-z]$/i.test(this.name) && !/\d{4,}/.test(this.name)

}
}
