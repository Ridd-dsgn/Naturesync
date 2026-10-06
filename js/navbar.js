/* NAVBAR: bar jadi solid saat scroll + menu hamburger di HP */
(function(){
  var bar=document.querySelector('.topbar'),
      btn=document.getElementById('bb'),
      menu=document.getElementById('mnav'),
      icon=document.getElementById('bi'),
      open=false;

  function update(){bar.classList.toggle('solid',scrollY>60||open)}
  function setMenu(o){
    open=o; menu.hidden=!o;
    btn.setAttribute('aria-expanded',o);
    btn.setAttribute('aria-label',o?'Tutup menu':'Buka menu');
    icon.setAttribute('d',o?'M6 6l12 12M18 6L6 18':'M4 7h16M4 12h16M4 17h16');
    update();
  }
  btn.addEventListener('click',function(){setMenu(!open)});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')setMenu(false)});
  addEventListener('keydown',function(e){if(e.key==='Escape'&&open)setMenu(false)});
  addEventListener('resize',function(){if(innerWidth>=768&&open)setMenu(false)});
  addEventListener('scroll',update);
  update();
})();
