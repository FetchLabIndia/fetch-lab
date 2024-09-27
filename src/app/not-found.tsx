import { redirect } from "next/navigation";

function _notfound() {
  redirect("/");
}

export default _notfound;
