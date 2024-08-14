import React, { useState } from "react";
function App() {
    const [country, setCountry] = useState("");
    const [goldMedal, setGoldmedal] = useState(0);
    const [silverMedal, setSilvermedal] = useState(0);
    const [bronzeMedal, setBronzemedal] = useState(0);

    const [addCountry, setAddCountry] = useState([]);

    // 중복 국가 검사 함수
    const checkExistingCountry = () => {
        return addCountry.find((countryData) => {
            if (
                countryData.name.toLocaleLowerCase() ===
                country.toLocaleLowerCase()
            ) {
                return true;
            } else {
                return false;
            }
        });
    };

    const addCountryHandler = (e) => {
        e.preventDefault();

        if (checkExistingCountry()) {
            alert("이미 등록된 국가입니다.");
        } else {
            // 데이터 객체로 추가
            const newCountry = {
                id: new Date().getTime(),
                name: country,
                gold: goldMedal,
                silver: silverMedal,
                bronze: bronzeMedal,
            };

            // 인풋필드 초기화
            setCountry("");
            setGoldmedal(0);
            setSilvermedal(0);
            setBronzemedal(0);

            setAddCountry([...addCountry, newCountry]);
        }
    };

    // 삭제
    const deleteCountry = (countryName) => {
        const deletCountries = addCountry.filter((element) => {
            return countryName !== element.name;
        });

        setAddCountry(deletCountries);
    };

    //업데이트
    const updateCountry = (e) => {
        e.preventDefault();

        // 새로 입력받은 데이터 저장 및 출력
        if (checkExistingCountry()) {
            setAddCountry(
                addCountry.map((countryData) => {
                    if (
                        countryData.name.toLocaleLowerCase() ===
                        country.toLocaleLowerCase()
                    ) {
                        return {
                            id: new Date().getTime(),
                            name: countryData.name,
                            gold: goldMedal,
                            silver: silverMedal,
                            bronze: bronzeMedal,
                        };
                    } else {
                        return countryData;
                    }
                })
            );
        } else {
            alert("등록되지 않은 국가입니다.");
        }

        // 인풋필드 초기화
        setCountry("");
        setGoldmedal(0);
        setSilvermedal(0);
        setBronzemedal(0);
    };
    return (
        <>
            <form action="" onSubmit={addCountryHandler}>
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
                            required // 유효성검사 : form에서만 작동 , 공란만 가능
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
                            min="0" // 스피너 최솟값 설정
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
                            min="0"
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
                            min="0"
                        />
                    </div>

                    <button type="submit">국가 추가</button>
                    <button type="button" onClick={updateCountry}>
                        업데이트
                    </button>
                </div>
            </form>
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
                                    <td>{country.name}</td>
                                    <td>{country.gold}</td>
                                    <td>{country.silver}</td>
                                    <td>{country.bronze}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                deleteCountry(country.name);
                                            }}
                                        >
                                            삭제
                                        </button>
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
