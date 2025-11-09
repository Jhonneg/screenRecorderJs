import Header from "@/components/Header";

export default async function Page({ params }: ParamsWithSearch) {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="jonee4339@hotmail.com"
        title="Jonee"
        userImg="/assets/images/dummy.jpg"
      /> 
      <h1>USER ID: {id}</h1>
    </div>
  );
}
