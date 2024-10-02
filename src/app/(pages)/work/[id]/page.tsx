import { workInfo } from "@/app/utils/lib/utils";
import React from "react";
import RenderWork, { SlugProg } from "../RenderWork";
import { redirect } from "next/navigation";

function page({ params }: { params: { id: string } }) {
  const id = params.id;
  if (!id) redirect("/work");
  const isValid = workInfo.filter((r) => r.slug === id)[0];

  if (!isValid) redirect("/work");
  return <RenderWork slug={isValid as SlugProg} />;
}

export default page;
