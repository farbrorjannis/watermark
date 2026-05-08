// ... Existing Code ...


const downloadBtn = document.getElementById('downloadBtn');

 // ... Event Listener for image Input 


 reader.readAsDataURL(file); 
}); // End event listener



    reader.onload = function(e) {
        // Create a temporary image element, load the data URL, and wait for it to be fully loaded:
        const img = new Image();
        img.src = e.target.result;  

        img.onload = () => { 
            // Canvas Setup & Watermark Drawing
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d'); 
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // ... Apply Watermark logic (you'll use ctx methods here)  ...
            
            // Set Alt Text Dynamically

            img.alt = altText;   


            // Display Preview and Add Download Functionality:

            const previewDiv = document.getElementById('preview');
            previewDiv.innerHTML = ''; // Clear any existing content in the preview div 
            previewDiv.appendChild(canvas); // Add the canvas to the preview area  
            downloadBtn.addEventListener('click', () => {
                // Create a link element and set its download attribute
                const link = document.createElement('a');
                link.download = 'watermarked_image.png'; // Set the desired filename

                // Generate data URL for the canvas image 
                link.href = canvas.toDataURL();  // Converts the canvas to a data URL
                link.click(); // Trigger a click event on the link, initiating the download

            });


        };
    };




