//Arrays==========================================
//Array declartion--------
let arr = [0,1,2,3,4,5,6,7]
//Array accessing-------
//Its access by indexing
console.log(arr[0]);
//Array alwasys make shallow copies(chnage in oringnal array "work on call by  refence because its a non primitive datatype stor in heap memory ")
//Deep copy of an object is a copy whoes properties do not share the same refernces point
/*
Array jo hota hai vo non primitve datatype (Object hota hai)  jo heap memory me data store karta hai aur uska refernece variable me store hota hai jo run time me stack me hota hai 
Array me ham 2 types se copy karte hai ye ek hota hota shallow copy jismeham data ke refence me change karte hai toh data me bhi cahnge hota hai "Ye Independent copy nhi hota hai"
Array me deep copy bhi banta hai isme ham jab copy kartehai tab vo new block leta hai memory ka "Ye Independent copy banta hai "
 */
arr.push(8)
console.log(arr);
