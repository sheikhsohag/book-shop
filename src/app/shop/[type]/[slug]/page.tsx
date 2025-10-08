export default function page({
  params,
}: {
  params: { type: string; slug: string };
}) {
  const { type, slug } = params;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Type: {type}</h1>
      <p className="text-xl">Slug: {slug}</p>
      <p>Full URL: /store/{type}/{slug}</p>
    </div>
  );
}