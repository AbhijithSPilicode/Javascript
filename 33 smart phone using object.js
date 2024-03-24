
class SmartPhone{
    constructor(ram, batteryPower, price){
        this.ram=ram;
        this.batteryPower=batteryPower;
        this.price=price;
    }
}

class AndroidPhone extends SmartPhone{
    constructor(modelName, ram, batteryPower, price) {
        super(ram,batteryPower,price)
        this.modelName=modelName;
        this.ram=ram;
        this.batteryPower=batteryPower;
        this.price=price;
    }
        displayFeatures(){
            return this.ram +'\n'+this.batteryPower+'\n'+this.price;
        }
        remainingAmount(priceIHave){
            this.price = priceIHave-this.price;
            return 'Customer has remaining Rs.'+this.price +' after buying the android phone';
        }
    }


class IPhone extends SmartPhone{
    constructor(seriesName, ram, batteryPower, price) {
        super(ram, batteryPower, price)
        this.seriesName = seriesName;
        this.ram=ram;
        this.batteryPower=batteryPower;
        this.price=price;
    }
    displayFeatures(){
        return this.ram +'\n'+this.batteryPower+'\n'+this.price;
    }
    remainingAmount(priceIHave){
        this.price = priceIHave-this.price;
        return 'Customer has remaining Rs.'+ this.price +' after buying the android phone';
    }
}

class MobileCampus{
    constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles){
        this.NoOfMobiles=NoOfMobiles;
        this.NoOfAndroidMobiles=NoOfAndroidMobiles;
        this.NoOfIPhoneMobiles=NoOfIPhoneMobiles;
        }
        changeMobileAvailabilityNumber(count,type){
            this.count=count;
            this.type=type;
            if(type === 'android'){
                this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
                return 'Available android mobiles are '+this.NoOfAndroidMobiles;
    
            }
            if(type === 'iphone'){
                this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
                return 'Available iphone mobiles are '+this.NoOfIPhoneMobiles;
            } 
        }   
}

let Samsung=new AndroidPhone("Galaxy",64,12000,25000)
let iphone14=new IPhone("14ProMax",128,18000,80000)
let MobileStore=new MobileCampus(10,7,3)
console.log(Samsung)
console.log(AndroidPhone)
console.log(Samsung.displayFeatures())
console.log(Samsung.remainingAmount(26000))
console.log(iphone14)
console.log(iphone14.displayFeatures())
console.log(iphone14.remainingAmount(90000))
console.log(MobileStore.changeMobileAvailabilityNumber(5,"android"))