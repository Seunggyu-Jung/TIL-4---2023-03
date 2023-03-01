# TIL-4---2023-03
2023년 2월 27일 ~ 3월 31일 학습기록

## 2023 - 2 - 27

- Math.sqrt() : 제곱근을 구하는 메서드
```
Math.sqrt(144) // 12
```

- n**2 : n의 제곱
```
12**2 // 144
```


- arr.every() : 두 배열의 객체를 비교하는 메서드

```
arr1.every((value, index) => value === arr2[index])  // arr1과 arr2의 객체를 하나씩 비교

be.every((v,i) => v === af[i])
```

-----------------


## 2023 - 2 - 28

- arr.sort().reverse() : 반대로 뒤집기


```
[...n + ""].sort().reverse().join("")
```



## 2023 - 3 - 1


- fill(채울것, 시작할 인덱스, 끝낼 인덱스) : 해당 범위만큼 채우는 방법


```
[...phone_number].fill("*",0, phone_number.length - 4).join("")
```


- 변수를 편하게 합치는 방법 : (` ${}  `)


```
`김서방은 ${seoul.findIndex((el) => (el) === "Kim")}에 있다`
```