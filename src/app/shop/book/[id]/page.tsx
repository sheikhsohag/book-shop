import BookDetails from '@/app/Component/BookDetails/BookDetails';
import React from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div>
      <BookDetails id={Number(id)} />
    </div>
  );
}

export default Page;
