import CompanyProfile from './page-company'

export default async function CompanyProfilePage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const param = await params
  const id = param.id

  return <CompanyProfile paramId={id} />
}
