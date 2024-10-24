function deseneazaOriginal(img) 
{
    const canvasOriginal = document.getElementById('canvasOriginal');
    const ctxOriginal = canvasOriginal.getContext('2d');
    canvasOriginal.width = img.width;
    canvasOriginal.height = img.height;
    ctxOriginal.drawImage(img, 0, 0);
}

function deseneazaOglindit(img) 
{
    return new Promise((resolve, reject) => {
        const canvasMirrored = document.getElementById('canvasMirrored');
        const ctxMirrored = canvasMirrored.getContext('2d');
        canvasMirrored.width = img.width * 2; 
        canvasMirrored.height = img.height;
        const sliceWidth = img.width / 4; 
        let currentSlice = 0;

        function drawSlice() {
            const startX = (3 - currentSlice) * sliceWidth; 
            const destX = (currentSlice) * sliceWidth; 

            ctxMirrored.save();
            ctxMirrored.scale(-1, 1);
            ctxMirrored.drawImage(img, startX, 0, sliceWidth, img.height, -destX - sliceWidth, 0, sliceWidth, img.height);
            ctxMirrored.restore();

            currentSlice++;
            if (currentSlice < 4) {
                setTimeout(drawSlice, 1000);
            } else {
                resolve();
            }
        }
        drawSlice();
    });
}