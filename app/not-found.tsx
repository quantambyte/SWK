import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <body className='text-center'>
        <h1 className='mt-10 font-semibold'>NOT FOUND</h1>
        <Link href='/en'>Back to HOME</Link>
      </body>
    </html>
  );
}
