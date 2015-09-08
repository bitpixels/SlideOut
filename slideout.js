$.fn.slide = function(options){
return this.each(function(){
var settings = $.extend({
show: false,
direction: ["left","right","up","down"],
duration: 1000,
defaultdirection: 3,
random: true
}, options );
min = 1;
max = 4;
if(settings.random){settings.defaultdirection = Math.floor(Math.random() * (max - min + 1)) + min;}
if(settings.show){$(this).show("slide", { direction: settings.direction[settings.defaultdirection] }, settings.duration);}
else if(!settings.show) {$(this).hide("slide", { direction: settings.direction[settings.defaultdirection] }, settings.duration);}
});
}