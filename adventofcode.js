//day 1
//Calculations:
const fuelFunction = input => {
  return Math.floor(input / 3) - 2;
};

//Data:
let input = `130676
85676
100556
87693
123830
80912
138679
54162
51866
86617
109838
59043
134132
96531
120194
70404
72361
76161
119764
121228
86196
61936
147793
69226
70059
130473
146038
62889
78648
141921
146270
132600
61658
141392
89173
53501
94835
130408
58427
95394
149591
60199
59829
71011
119922
116359
54330
68431
79188
52061
75151
146200
74022
128589
51944
134746
114670
57787
104051
118206
84622
133143
95292
123703
144581
133101
104711
66849
131474
81989
121964
52866
69993
137283
128549
111680
97570
115016
53024
115880
112085
72821
61449
145167
50947
98655
55298
86164
99636
135613
135293
97938
63816
143939
58524
100805
61520
121312
70638
117762`;

let output = input.split("\n");
//output is an array yay!
//console.log(output);
const newOutput = output.map(a => fuelFunction(a));
console.log(newOutput);

//day 2

let arr = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  6,
  1,
  19,
  1,
  19,
  9,
  23,
  1,
  23,
  9,
  27,
  1,
  10,
  27,
  31,
  1,
  13,
  31,
  35,
  1,
  35,
  10,
  39,
  2,
  39,
  9,
  43,
  1,
  43,
  13,
  47,
  1,
  5,
  47,
  51,
  1,
  6,
  51,
  55,
  1,
  13,
  55,
  59,
  1,
  59,
  6,
  63,
  1,
  63,
  10,
  67,
  2,
  67,
  6,
  71,
  1,
  71,
  5,
  75,
  2,
  75,
  10,
  79,
  1,
  79,
  6,
  83,
  1,
  83,
  5,
  87,
  1,
  87,
  6,
  91,
  1,
  91,
  13,
  95,
  1,
  95,
  6,
  99,
  2,
  99,
  10,
  103,
  1,
  103,
  6,
  107,
  2,
  6,
  107,
  111,
  1,
  13,
  111,
  115,
  2,
  115,
  10,
  119,
  1,
  119,
  5,
  123,
  2,
  10,
  123,
  127,
  2,
  127,
  9,
  131,
  1,
  5,
  131,
  135,
  2,
  10,
  135,
  139,
  2,
  139,
  9,
  143,
  1,
  143,
  2,
  147,
  1,
  5,
  147,
  0,
  99,
  2,
  0,
  14,
  0
];
for (i = 0; i < arr.length + 1; i++) {
  if (arr[i] === 1) {
    let a = i + 1;
    let b = i + 2;
    let newNumber = arr[arr[a]] + arr[arr[b]];
    arr[arr[i + 3]] = newNumber;
  } else if (arr[i] === 2) {
    let c = i + 1;
    let d = i + 2;
    let newNumber2 = arr[arr[c]] * arr[arr[d]];
    arr[arr[i + 3]] = newNumber2;
  } else if (arr[i] === 99) {
    console.log(`The program has terminated at position ${i}`);
  }
}
console.log(arr);
