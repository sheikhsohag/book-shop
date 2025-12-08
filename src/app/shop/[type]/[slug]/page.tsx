export default async function Page({
  params,
}: {
  params: Promise<{ type: string; slug: string }>;
}) {
  const { type, slug } = await params;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Type: {type}</h1>
      <p className="text-xl">Slug: {slug}</p>
      <p>Full URL: /shop/{type}/{slug}</p>
    </div>
  );
}