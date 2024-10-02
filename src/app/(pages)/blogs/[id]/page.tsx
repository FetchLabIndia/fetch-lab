import { redirect } from "next/navigation";
import { blogs } from "@/app/utils/lib/utils";
import SingleBlog from "./components/singleBlog";
function page({ params }: { params: { id: string } }) {
  const id = params.id;
  if (!id) redirect("/blogs");
  const isValid = blogs.filter((b) => b.id == id)[0];
  if (!isValid) redirect("/blogs");
  return <SingleBlog />;
}

export default page;
