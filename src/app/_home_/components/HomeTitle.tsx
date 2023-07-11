import React from 'react'
import MyButton from "@/app/_home_/components/MyButton";

function HomeTitle() {
    return (
        <div className="HomeTitle">
            <div className="TitleText">Order food from favorite restaurants in Innopolis</div>

            <div className="MyButtonPosition">
                <a href="/all">
                    <MyButton/>
                </a>
            </div>
        </div>
    )
}

export default HomeTitle
