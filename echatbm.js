var room_id = document.getElementById('kaynak').getAttribute('data-room');
alert(room_id);
var sdcript = document.createElement('div');
    sdcript.id = 'ababcdcd';
    var heaadfd = document.getElementsByTagName("body")[0];
    heaadfd.appendChild(sdcript);
sdcript.innerHTML='<style>#eleaefm{position: absolute;z-index:9999999;width: 240px;height: 450px;border:1px solid #a1b1ec;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;-khtml-user-select: none;user-select: none;cursor: default;padding:30px 6px 6px 6px;-webkit-border-radius: 4px;border-radius: 4px;-moz-box-shadow: 0 0 5px #888;-webkit-box-shadow: 0 0 5px #888;box-shadow: 0 0 5px #888;background: #b1c1d5;background: -moz-linear-gradient(-45deg,  #b1c1d5 0%, #f2f6ff 100%);background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#b1c1d5), color-stop(100%,#f2f6ff));background: -webkit-linear-gradient(-45deg,  #b1c1d5 0%,#f2f6ff 100%);background: -o-linear-gradient(-45deg,  #b1c1d5 0%,#f2f6ff 100%);background: -ms-linear-gradient(-45deg,  #b1c1d5 0%,#f2f6ff 100%);background: linear-gradient(135deg,  #b1c1d5 0%,#f2f6ff 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#b1c1d5", endColorstr="#f2f6ff",GradientType=1 );}#eleaefm span{color:#fff !important;font-family:Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;position:absolute;top:3px;right:8px;text-shadow: #55d 0px 0px 3px}</style>';
function removeElegment(node) {
    node.parentNode.removeChild(node);
}
            function $(el){
                return document.getElementById(el);
            }
            var tzdragg = function(){
                return {
                    move : function(divid,xpos,ypos){
                        var a = $(divid);
                        $(divid).style.left = xpos + 'px';
                        $(divid).style.top = ypos + 'px';
                    },
                    startMoving : function(evt){
                        evt = evt || window.event;
                        var posX = evt.clientX,
                            posY = evt.clientY,
                            a = $('eleaefm'),
                        divTop = a.style.top,
                        divLeft = a.style.left;
                        divTop = divTop.replace('px','');
                        divLeft = divLeft.replace('px','');
                        var diffX = posX - divLeft,
                            diffY = posY - divTop;
                        document.onmousemove = function(evt){
                            evt = evt || window.event;
                            var posX = evt.clientX,
                                posY = evt.clientY,
                                aX = posX - diffX,
                                aY = posY - diffY;
                            tzdragg.move('eleaefm',aX,aY);
                        }
                    },
                    stopMoving : function(){
                        var a = document.createElement('script');
                        document.onmousemove = function(){}
                    },
                }
            }();

sdcript.innerHTML+='<div id="eleaefm" onmousedown="tzdragg.startMoving(event);" onmouseup="tzdragg.stopMoving();" style="top: 100px; left: 100px;" ><span onclick="removeElegment(this.parentNode);">X</span><iframe frameBorder="0" width="240" height="450" src="http://www.e-chat.co/widget?id=1"></iframe></div>';