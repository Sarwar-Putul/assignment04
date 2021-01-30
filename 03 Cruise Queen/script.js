// document.getElementById('first-increase').addEventListener('click', function() {
        //     handleFirstClassChange(true);
        //  });
        //  document.getElementById('first-decrease').addEventListener('click', function() {
        //     handleFirstClassChange(false);
        //  });

        function handleFirstClassChange(isIncrease){
            const firstInput = document.getElementById('first-count');
            const firstCount = parseInt(firstInput.value);
            if(isIncrease == true) {
                firstNewCount = firstCount + 1;
            }
            if(isIncrease == false) {
                firstNewCount = firstCount - 1;
            }
            firstInput.value = firstNewCount;
            const firstClassTotal = firstNewCount * 150;
            calculateTotal();
        }


         // document.getElementById('eco-increase').addEventListener('click', function() {
        //     handleEconomyChange(true);
        //  });
        //  document.getElementById('eco-decrease').addEventListener('click', function() {
        //     handleEconomyChange(false);
        //  });

        function handleEconomyChange(isIncrease){
            const ecoInput = document.getElementById('eco-count');
            const ecoCount = parseInt(ecoInput.value);
            if(isIncrease == true) {
                ecoNewCount = ecoCount + 1;
            }
            if(isIncrease == false) {
                ecoNewCount = ecoCount - 1;
            }
            ecoInput.value = ecoNewCount;
            const economyTotal = ecoNewCount * 100;
            calculateTotal();
        }


        function calculateTotal() {
            const firstInput = document.getElementById('first-count');
            const firstCount = parseInt(firstInput.value);
            const ecoInput = document.getElementById('eco-count');
            const ecoCount = parseInt(ecoInput.value);
            const firstCount = firstNewCount;
            const ecoCount = ecoNewCount;
            const totalPrice = firstNewCount * 150 + ecoNewCount * 100;
            document.getElementById('total-price').innerText = '$' + totalPrice;
   
            const tax = Math.round(totalPrice * 0.1);
            document.getElementById('tax-amount').innerText = '$' + tax;
   
            const grandTotal = totalPrice + tax;
            document.getElementById('grand-total').innerText = '$' + grandTotal;

            const confirmSubtotal = firstNewCount * 150 + ecoNewCount * 100;
            document.getElementById('confirm-subtotal').innerText = '$' + confirmSubtotal;

            const confirmTax = Math.round(totalPrice * 0.1);
            document.getElementById('confirm-tax').innerText = '$' + confirmTax;

            const confirmTotal = totalPrice + tax;
            document.getElementById('confirm-total').innerText = '$' + confirmTotal;
         }






         const bookingbtn = document.getElementById('booked');
         bookingbtn.addEventListener('click',function(){
             const bookingArea = document.getElementById('booking-area');
             bookingArea.style.display = "none";
             const confirmationArea = document.getElementById('confirmation-area');
             confirmationArea.style.display = "block";
 
         })
     //      function handleCruiseChange(cruise, isIncrease) {
     //      const cruiseInput = document.getElementById(cruise +'-count');
     //      const cruiseCount = parseInt(cruiseInput.value);
     //         let cruiseNewCount = cruiseCount;
     //         if(isIncrease == true) {
     //             cruiseNewCount = cruisetCount + 1;
     //         }
     //         if(isIncrease == false && cruiseCount > 0) {
     //             cruiseNewCount = cruiseCount -1;
     //         }
     //         cruiseInput.value = cruiseNewCount;
     //         let cruiseTotal = 0;
     //         if(cruise == 'firstClass'){
     //             cruiseTotal = cruiseNewCount * 150;
     //         }
     //         if (cruise == 'economy'){
     //             cruiseTotal = cruiseNewCount * 100;
     //         }
     //         document.getElementById('cruise').innerText = cruiseTotal;
     //         calculateTotal()
     //   }
 
 
 
 
 
 
 
 
 
 
 
 
         // document.getElementById('first-increase').addEventListener('click', function(){
         //     const firstInput = document.getElementById('first-count');
         //     const firstCount = parseInt(firstInput.value);
         //     const firstNewCount = firstCount + 1;
         //     firstInput.value = firstNewCount;
         //     const firstClassTotal = firstNewCount * 150;
         //     document.getElementById('total-price').innerText = '$' + firstClassTotal;
         // });
 
         // document.getElementById('first-decrease').addEventListener('click', function(){
         //     const firstInput = document.getElementById('first-count');
         //     const firstCount = parseInt(firstInput.value);
         //     const firstNewCount = firstCount - 1;
         //     firstInput.value = firstNewCount;
         //     const firstClassTotal = firstNewCount * 150;
         //  document.getElementById('total-price').innerText = '$' + firstClassTotal;
         // });
 
         // document.getElementById('eco-increase').addEventListener('click', function(){
         //     const ecoInput = document.getElementById('eco-count');
         //     const ecoCount = parseInt(ecoInput.value);
         //     const ecoNewCount = ecoCount + 1;
         //     ecoInput.value = ecoNewCount;
         //     const economyTotal = ecoNewCount * 100;
         // });
 
         // document.getElementById('eco-decrease').addEventListener('click', function(){
         //     const ecoInput = document.getElementById('eco-count');
         //     const ecoCount = parseInt(ecoInput.value);
         //     const ecoNewCount = ecoCount - 1;
         //     ecoInput.value = ecoNewCount;
         //     const economyTotal = ecoNewCount * 100;
         // });