export default defineNuxtPlugin((nuxtApp) => {
    const isSamsung = navigator.userAgent.toLowerCase().includes('samsung');
    console.log('Running on Samsung device:', isSamsung);

    // You can store the result globally if needed
    if (isSamsung) {
        // Apply logic specific to Samsung devices
        nuxtApp.$config.public.disableInfoLayer = true;
    }
});
