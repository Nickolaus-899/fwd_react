import React from "react";
import MyButton from "@/lib/home/components/MyButton";

function HomeTitle() {
  return (
    <div className="HomeTitle">
      <div className="TitleText">
        Order food from your favorite restaurants in Innopolis
      </div>

      <div className="MyButtonPosition">
        <a href="/all">
          <MyButton />
        </a>
      </div>
    </div>
  );
}

export default HomeTitle;
