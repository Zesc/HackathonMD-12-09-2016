/**
 * Created by zesc on 12/11/16.
 */
window.onload = function(){
  document.getElementById("btn-1").onclick = function fun(){
    var dropContent = document.getElementsByClassName("drop-content")[0];
    var dropBtn = document.getElementById("btn-1");
    dropContent.style.display = 'block';
    dropBtn.style.display = 'none';

  document.getElementById('close-btn').onclick = function (){
    dropContent.style.display = 'none';
    dropBtn.style.display = 'block';
    dropBtn.style.margin = '5%';
  }
  };
}

