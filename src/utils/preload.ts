export function preloadAssets(page: string) {
  import.meta.glob('../assets/shared/*');

  if (page === 'home') {
    import.meta.glob('../assets/home/*');
  }
  if (page === 'crew') {
    import.meta.glob('../assets/crew/*');
  }
  if (page === 'destination') {
    import.meta.glob('../assets/destination/*');
  }
  if (page === 'technology') {
    import.meta.glob('../assets/technology/*');
  }
}
