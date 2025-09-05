import BookDetails from '@/app/Component/BookDetails/BookDetails';
import React from 'react'

function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <BookDetails id={Number(id)} />
    </div>
  )
}

export default Page;
