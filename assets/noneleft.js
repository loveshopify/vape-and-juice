var IASNoneLeftExtension=function(t){return t=jQuery.extend({},this.defaults,t),this.ias=null,this.uid=(new Date).getTime(),this.html=t.html.replace("{text}",t.text),this.showNoneLeft=function(){var t=jQuery(this.html).attr("id","ias_noneleft_"+this.uid);this.ias.getLastItem().after(t),t.fadeIn()},this};IASNoneLeftExtension.prototype.bind=function(t){this.ias=t,t.on("noneLeft",jQuery.proxy(this.showNoneLeft,this))},IASNoneLeftExtension.prototype.unbind=function(t){t.off("noneLeft",this.showNoneLeft)},IASNoneLeftExtension.prototype.defaults={text:"You reached the end.",html:'<div class="ias-noneleft" style="text-align: center;"><span>{text}</span></div>'};