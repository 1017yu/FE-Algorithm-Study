function solution(A,B){
    let answer = 0;

    A.sort((a, b) => (a - b));
    B.sort((a, b) => (b - a));
    
    A.forEach((number, index) => {
        answer += number * B[index]
    })

    return answer;
}
