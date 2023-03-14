const itemsActive = document.getElementsByClassName('life-rules-item active');
 const itemImg = document.getElementsByClassName('life-rules-item-img');

 document.querySelectorAll('.life-rules-item').forEach((bayan) => {
   const bayanHeader = bayan.querySelector('.life-rules-item-header');
   const bayanBody = bayan.querySelector('.life-rules-item-content');
   const bayanContent = bayan.querySelector('.life-rules-item-content > *');

   if (window.outerWidth <= 820) {
     showOrHideItem();

     bayanHeader.addEventListener('click', () => {
       const itemParant = bayanHeader.closest('.life-rules-item');
       if (itemParant.classList.contains('active') && itemsActive.length === 1) {
         return;
       }
       bayan.classList.toggle("active");
       showOrHideItem();
     })

     bayanBody.addEventListener('click', (e) => {
       const items = document.getElementsByClassName('life-rules-item');
       for (let k = 0; k < items.length; k++) {
         items[k].classList.remove('active');
         const itemContent = items[k].getElementsByClassName('life-rules-item-content');
         itemContent[0].style.maxHeight = "0px";
       } 

       const item = e.target.closest('.life-rules-item');
       const itemContent = e.target.closest('.life-rules-item-content');
       item.classList.add('active');
       itemContent.style.maxHeight = `${itemContent.clientHeight}px`;
     });

   } else {
     for (let i = 0; i < itemImg.length; i++) {
       itemImg[i].onclick = function(e) {
         for (let k = 0; k < itemsActive.length; k++) {
           itemsActive[k].classList.remove('active');
         } 
         const item = e.target.closest('.life-rules-item');
         item.classList.add('active');
       }
     }
   }

   function showOrHideItem() {
     if ( bayan.classList.contains("active") ) {
       bayanBody.style.maxHeight = `${bayanContent.clientHeight}px`;
     } else {
         bayanBody.style.maxHeight = "0px";
     }
   }

 });