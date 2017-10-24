class AndelaFellow {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class SoftWareDeveloper extends AndelaFellow {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications(){
    return this._certifications;
  }
  
  addCertification(newCertification){
    this._certifications.push(newCertification);
  }
}

const sdJason = new SoftWareDeveloper('Jason', ['Javascript','CSS']);
sdJason.takeVacationDays(5);
console.log(sdJason.remainingVacationDays);

sdJason.addCertification('HTML');
console.log(sdJason.certifications);
