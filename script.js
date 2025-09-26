function toggleMenu(){
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

/* نغلق المينيو لما نضغط على أي لينك داخل القائمة */
document.addEventListener('click', function(e){
  const nav = document.querySelector('.nav-links');
  if (!e.target.closest('.navbar')) return; // لو الضغط برا النافبار: نعمل ничего
  if (e.target.matches('.nav-links a')) {
    nav.classList.remove('active');
  }
});
