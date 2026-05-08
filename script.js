const imageInput = document.getElementById('imageInput');
const placementSelect = document.getElementById('placement');
const sizeSlider = document.getElementById('sizeSlider');
const prominenceSlider = document.getElementById('prominenceSlider');
const artistNameInput = document.getElementById('artistName');
const websiteInput = document.getElementById('website');
const yearInput = document.getElementById('year');

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; 
    if (!file.type.match('image.*')) {
        alert("Please select an image file.");
        return;
    }
    
    const reader = new FileReader(); 

    reader.onload = function(e) {
        const img = new Image(); // Create a temporary image element
        img.src = e.target.result; 
        img.onload = () => {
            // Canvas Setup & Watermark Drawing (This is where we'll use canvas to draw the watermark)

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d'); 
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0); // Draw original image onto canvas

            // Apply Watermark (adjust position, size, opacity based on user inputs)
            // ... Your watermark drawing logic here using ctx methods

            // Set Alt Text Dynamically
            let altText = `Copyright © ${yearInput.value} ${artistNameInput.value}`; 
            if (websiteInput.value) {
                altText += ` - ${websiteInput.value}`;
            }
            img.alt = altText;

            // Display the watermarked image in a preview area (you'll need to add HTML for this)


        }; // end img.onload
    }; // end reader.onload

    reader.readAsDataURL(file); 
});



