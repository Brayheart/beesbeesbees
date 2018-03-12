var HoneyMakerBee = function() {
    Bee.call(this);
    this.age = 10;
    this.job = "make honey";
    this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype); //inherits grub functions
HoneyMakerBee.prototype.constructor = HoneyMakerBee; //sets constructor for additional functions
HoneyMakerBee.prototype.makeHoney = function () { this.honeyPot++ }
HoneyMakerBee.prototype.giveHoney = function () { this.honeyPot-- }


