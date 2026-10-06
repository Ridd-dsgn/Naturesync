/* FORM: validasi formulir pendaftaran (belum terhubung ke server) */
(function(){
  var form=document.getElementById('f'),msg=document.getElementById('msg');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(form);
    if(!d.get('nama')||!d.get('sekolah')||!/.+@.+\..+/.test(d.get('email')||'')){
      msg.classList.add('is-error');
      msg.textContent='Lengkapi nama, sekolah, dan email yang valid.';
      return;
    }
    msg.classList.remove('is-error');
    msg.textContent='Terima kasih, '+d.get('nama')+'. Pendaftaranmu tercatat.';
    form.reset();
  });
})();
