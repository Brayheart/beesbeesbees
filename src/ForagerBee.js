var ForagerBee = function() {
    Bee.call(this); //inherits properties from bee
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);//inherits functions from grub
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(value) {
    this.treasureChest.push(value);
}
