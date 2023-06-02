export function preloadAssets(page: string) {
  import.meta.glob('../assets/shared/*');
  console.log('shared assets preloaded');

  if (page === 'home') {
    import.meta.glob('../assets/home/*');
    console.log('home assets preloaded');
  }
  if (page === 'crew') {
    import.meta.glob('../assets/crew/*');
    console.log('crew assets preloaded');
  }
  if (page === 'destination') {
    import.meta.glob('../assets/destination/*');
    console.log('destination assets preloaded');
  }
  if (page === 'technology') {
    import.meta.glob('../assets/technology/*');
    console.log('technology assets preloaded');
  }
}
