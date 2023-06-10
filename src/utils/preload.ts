export function preloadAssets(page: string) {
  const assetUrls: string[] = Object.keys(import.meta.glob('/src/assets/shared/*'));

  if (page === 'home') {
    assetUrls.push(...Object.keys(import.meta.glob('/src/assets/home/*')));
  }
  if (page === 'crew') {
    assetUrls.push(...Object.keys(import.meta.glob('/src/assets/crew/*')));
  }
  if (page === 'destination') {
    assetUrls.push(...Object.keys(import.meta.glob('/src/assets/destination/*')));
  }
  if (page === 'technology') {
    assetUrls.push(...Object.keys(import.meta.glob('/src/assets/technology/*')));
  }

  assetUrls.forEach((assetUrl) => {
    new Image().src = assetUrl;
    console.log('Preloaded asset: ', assetUrl);
  });
}
