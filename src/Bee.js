var Bee = function() {
    Grub.call(this);
    this.age = 5;
    this.color = 'yellow';
};

Bee.prototype = Object.create(Grub.prototype);//inhertits methods from grub;
Bee.prototype.job = 'keep on growing';
Bee.prototype.constructor = Bee; //sets constructor?
