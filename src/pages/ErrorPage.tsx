export const ErrorPage = (props: { errorMessage: string }) => {
  return (
    <div className='absolute right-0 top-0 flex flex-col gap-8 h-screen w-screen items-center justify-center text-center'>
      <h1 className='text-4xl text-white'>Error</h1>
      <p className='text-white mx-10'>{props.errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
