/**
 * Created by ���� on 2016/7/12.
 */
;(function(win,doc){
    function change(){
        doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
    }
    change();
    win.addEventListener('resize',change,false);
    console.log(222);
})(window,document);
