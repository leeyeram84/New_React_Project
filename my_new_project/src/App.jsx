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
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>국가명</th>
                                        <th>금메달</th>
                                        <th>은메달</th>
                                        <th>동메달</th>
                                        <th>액션</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>{country.country}</td>
                                    <td>{country.gold}</td>
                                    <td>{country.silver}</td>
                                    <td>{country.bronze}</td>
                                    <td>
                                        <button>삭제</button>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default App;
