/* empty css              */import{f as d,d as c}from"./validates.dd8a5988.js";import"./toast.04e64154.js";let t=document.getElementById("autor"),m=document.getElementById("template-autor"),o=document.getElementById("rol");var n;let s=document.getElementById("crop_image"),a=$("#modal_image");a.on("shown.bs.modal",function(){n=new Cropper(s,{aspectRatio:1,viewMode:2,dragMode:"move",preview:".preview",background:!1})}).on("hidden.bs.modal",function(){n.destroy(),n=null});t.addEventListener("transitionend",function(){t.classList.contains("colapse")&&!t.classList.contains("show")&&(t.innerHTML="")});o.onchange=e=>{e.target.value==2?(t.classList.add("show"),t.innerHTML=m.innerHTML):t.classList.remove("show")};o.onload=function(){o.dispatchEvent(new Event("change"))}();$("input[type=file]").change(function(e){e.preventDefault(),d(this.files[0],p(this))?(s.src=URL.createObjectURL(this.files[0]),a.modal("show")):this.value=""});function p(e){return e.getAttribute("accept").split(",").map(i=>i.trim())}document.getElementById("crop").addEventListener("click",function(){if(n){let e=$("input[type=file] + img"),i=n.getCroppedCanvas().toDataURL();e.prop("src",i),e.removeClass("hidden");let r=c(i,"imagen_recortada"),l=new DataTransfer;l.items.add(r),document.querySelector("input[type=file]").files=l.files,console.log(document.querySelector("input[type=file]"))}a.modal("hide")});
