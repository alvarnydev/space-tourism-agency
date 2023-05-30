export const ErrorPage = (props: { errorMessage: string }) => {
  return (
    <div className='absolute right-0 top-0 flex h-screen w-screen items-center justify-center'>
      <h1 className='text-4xl text-white'>Error</h1>
      <p className='text-white'>{props.errorMessage}</p>
    </div>
  );
};
