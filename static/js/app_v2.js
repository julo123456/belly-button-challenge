
// D3 reads in JSON file via URL.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it.
d3.json(url).then(function(data) {
  console.log(data);
});

// // From fetched JSON data above map only the sample array and assign it to sampleList variable.
// let sampleList = data.map(function (row){
//     return row.samples
// });

// // Sorting sample_values from sampleList. 
// let sortedByOtu = sampleList.sort((a,b) => b.sample_values - a.sample_values);

// // Slice top 10 from sortedByOtu array
// let slicedOtu = sortedByOtu.slice(0,10);
// console.log(slicedOtu);