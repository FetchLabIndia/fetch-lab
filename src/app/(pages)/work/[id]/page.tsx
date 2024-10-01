import WorkImages from "@/app/components/common/WorkImages";
import WorkInfo from "@/app/components/common/WorkInfo";
import React from "react";

const testingData = [
  "https://i.pinimg.com/236x/27/0c/23/270c230ca533e5d7990aa194d95c3eb7.jpg",
  "https://picsum.photos/1920/1080",
  "https://i.pinimg.com/236x/ef/e5/bc/efe5bca43b926fe659685454ab0e8f7f.jpg",
  "https://i.pinimg.com/236x/31/95/cf/3195cfe63afd708acbac20d285041ce3.jpg",
  "https://picsum.photos/1920/1080",
  "https://i.pinimg.com/474x/7f/92/be/7f92be8f68bea7c6a086a768d7fd3dc6.jpg",
  "https://i.pinimg.com/236x/2d/c3/c8/2dc3c85fd1cf9a900cca3dec322014a2.jpg"
]

function page() {
  return (
    <div className=" w-full mt-32 flex flex-col items-center justify-center">
      <WorkInfo />
      <WorkImages images={testingData} />
    </div>
  );
}

export default page;
