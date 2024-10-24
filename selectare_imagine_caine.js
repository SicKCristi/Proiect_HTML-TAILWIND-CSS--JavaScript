function selecteaza_imagine_caine() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          const imageUrl = data.message;
          resolve(imageUrl);
        })
        .catch(error => {
          reject(error);
        });
    }, 2000);
  });
}

async function conversieTonuriDeGri(ctx, canvas, startY, endY) {
  return new Promise((resolve) => {
      setTimeout(() => {
          const imageData = ctx.getImageData(0, startY, canvas.width, endY - startY);
          for (let i = 0; i < imageData.data.length; i += 4)
          {
              const avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
              imageData.data[i] = avg;
              imageData.data[i + 1] = avg;
              imageData.data[i + 2] = avg;
          }
          ctx.putImageData(imageData, 0, startY);
          resolve();
      }, 1000); 
  });
}

async function selecteaza_imagine_caine_si_oglindeste() {
  return new Promise((resolve) => {
      setTimeout(async () => {
          const imageUrl = await selecteaza_imagine_caine();
          if (!imageUrl) return resolve();
          const imgOriginal = new Image();
          imgOriginal.crossOrigin = "anonymous";
          imgOriginal.src = imageUrl;
          imgOriginal.onload = async function() {
              deseneazaOriginal(imgOriginal);
              const imgMirrored = new Image();
              imgMirrored.crossOrigin = "anonymous";
              imgMirrored.src = imageUrl;
              imgMirrored.onload = async function() {
                  deseneazaOglindit(imgMirrored);
                  const canvasGrayscale = document.getElementById('canvasGrayscale');
                  const ctxGrayscale = canvasGrayscale.getContext('2d');
                  canvasGrayscale.width = imgMirrored.width;
                  canvasGrayscale.height = imgMirrored.height;
                  ctxGrayscale.drawImage(imgMirrored, 0, 0);
                  await conversieTonuriDeGri(ctxGrayscale, canvasGrayscale, 0, imgMirrored.height / 4);
                  await conversieTonuriDeGri(ctxGrayscale, canvasGrayscale, imgMirrored.height / 4, imgMirrored.height / 2);
                  await conversieTonuriDeGri(ctxGrayscale, canvasGrayscale, imgMirrored.height / 2, (imgMirrored.height * 3) / 4);
                  await conversieTonuriDeGri(ctxGrayscale, canvasGrayscale, (imgMirrored.height * 3) / 4, imgMirrored.height);

                  resolve();
              };
          };
      }, 2000);
  });
}