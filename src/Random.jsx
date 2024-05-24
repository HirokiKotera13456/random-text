import {  useState, useEffect, useCallback, memo } from "react";

export const Random = memo(() => {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);

  const rouletteContents = [
    "小寺",
    "パク",
    "文凱",
    "周",
    "金子",
    "植本",
  ];

  //ボタンの文言を変更する処理
  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  //ルーレットを回す処理
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < rouletteContents.length - 1) return oldIndex + 1;
          return 0;
        });
      }, 50);//ルーレットの中身を切り替える速度
      return () => clearInterval(interval);
    } else if (!start) {
      return () => clearInterval();
    }
  }, [start]);

  

  return (
    <>
      <div>
        <p>今日の議事録は...</p>
        <p>{rouletteContents[index]}</p>
      </div>
      <button type="button" onClick={startRoulette}>
        {start ? "ストップ" : "スタート"}
      </button>

    </>
  );
});
