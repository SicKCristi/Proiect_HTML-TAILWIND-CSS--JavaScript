async function executaToateEtapele() {
    document.getElementById('timpExecutie').innerText = '';
async function executaToateEtapele() {
    document.getElementById('timpExecutie').innerText = '';

    const startTimeSelectare = performance.now();
    await selecteaza_imagine_caine_si_oglindeste();
    const endTimeSelectare = performance.now();
    const timeTakenSelectare = endTimeSelectare - startTimeSelectare;
    const timeInfoSelectare = `Timpul pentru selectare imagine: ${timeTakenSelectare} milisecunde`;
    document.getElementById('timpExecutie').innerText += timeInfoSelectare + '\n';

    const startTimeOglindire = performance.now();
    await new Promise(resolve => setTimeout(resolve, 500));
    const endTimeOglindire = performance.now();
    const timeTakenOglindire = endTimeOglindire - startTimeOglindire;
    const timeInfoOglindire = `Timpul pentru oglindirea imaginii: ${timeTakenOglindire} milisecunde`;
    document.getElementById('timpExecutie').innerText += timeInfoOglindire + '\n';

    const startTimeTransformare = performance.now();
    await new Promise(resolve => setTimeout(resolve, 800));
    const endTimeTransformare = performance.now();
    const timeTakenTransformare = endTimeTransformare - startTimeTransformare;
    const timeInfoTransformare = `Timpul pentru transformarea în gri: ${timeTakenTransformare} milisecunde`;
    document.getElementById('timpExecutie').innerText += timeInfoTransformare + '\n';
}
    const startTimeSelectare = performance.now();
    await selecteaza_imagine_caine_si_oglindeste();
    const endTimeSelectare = performance.now();
    const timeTakenSelectare = endTimeSelectare - startTimeSelectare;
    const timeInfoSelectare = `Timpul pentru selectare imagine: ${timeTakenSelectare} milisecunde`;
    document.getElementById('timpExecutie').innerText += timeInfoSelectare + '\n';

    const startTimeOglindire = performance.now();
    await new Promise(resolve => setTimeout(resolve, 500));
    const endTimeOglindire = performance.now();
    const timeTakenOglindire = endTimeOglindire - startTimeOglindire;
    const timeInfoOglindire = `Timpul pentru oglindirea imaginii: ${timeTakenOglindire} milisecunde`;
    document.getElementById('timpExecutie').innerText += timeInfoOglindire + '\n';

    const startTimeTransformare = performance.now();
    await new Promise(resolve => setTimeout(resolve, 800));
    const endTimeTransformare = performance.now();
    const timeTakenTransformare = endTimeTransformare - startTimeTransformare;
    const timeInfoTransformare = `Timpul pentru transformarea în gri: ${timeTakenTransformare} milisecunde`;
    document.getElementById('timpExecutie').innerText += timeInfoTransformare + '\n';
}