import React, { useState } from "react";
function App() {
    const [country, setCountry] = useState("");
    const [goldMedal, setGoldmedal] = useState("0");
    const [silverMedal, setSilvermedal] = useState("0");
    const [bronzeMedal, setBronzemedal] = useState("0");

    const [addCountry, setAddCountry] = useState([
        {
            id: "test",
            country: "",
            gold: 0,
            silver: 0,
            bronze: 0,
        },
    ]);

    const addCountryHandler = (e) => {
        e.preventDefault();
        const newCountry = {
            id: new Date().getTime(),
            country: country,
            gold: goldMedal,
            silver: silverMedal,
            bronze: bronzeMedal,
        };

        setAddCountry([...addCountry, newCountry]);
    };

    return (
        <>
            <h1>2024 파리 올림픽</h1>
            <div className="box">
                <div className="inputFiled">
                    <label>국가명</label>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => {
                            setCountry(e.target.value);
                        }}
                        placeholder="국가 입력"
                    />
                </div>
                <div className="inputFiled">
                    <label>금메달</label>
                    <input
                        type="number"
                        value={goldMedal}
                        onChange={(e) => {
                            setGoldmedal(e.target.value);
                        }}
                        placeholder="0"
                    />
                </div>
                <div className="inputFiled">
                    <label>은메달</label>
                    <input
                        type="number"
                        value={silverMedal}
                        onChange={(e) => {
                            setSilvermedal(e.target.value);
                        }}
                        placeholder="0"
                    />
                </div>
                <div className="inputFiled">
                    <label>동메달</label>
                    <input
                        type="number"
                        value={bronzeMedal}
                        onChange={(e) => {
                            setBronzemedal(e.target.value);
                        }}
                        placeholder="0"
                    />
                </div>
                <button onClick={addCountryHandler}>국가 추가</button>
            </div>
            <div>
                {addCountry.map(function (country) {
                    return (
                        <div className="countryBox">
                            <div className="country">
                                국가명 : {country.country}
                            </div>
                            <div className="gold">금 : {country.gold}</div>
                            <div className="sliver">은 : {country.silver}</div>
                            <div className="bronze">동 : {country.bronze}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default App;
