import { redirect } from "next/navigation";
import { blogs, blogsInfo } from "@/app/utils/lib/utils";
import SingleBlog from "./components/singleBlog";
function page({ params }: { params: { id: string } }) {
  const id = params.id;
  if (!id) redirect("/blogs");
  const isValid = blogs.filter((b) => b.id == id)[0];
  if (!isValid) redirect("/blogs");
  return <SingleBlog data={blogsInfo.filter((b) => b.id == isValid.id)[0]} />;
}

export default page;
export const runtime = "edge";
