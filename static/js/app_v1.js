
// D3 reads in JSON file via URL.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it.
d3.json(url).then(function(data) {
  console.log(data);
});

// From fetched JSON data above map only the sample array and assign it to sampleList variable.
let sampleList = data.map(function (row){
    return row.samples
});

// Sorting sample_values from sampleList. 
let sortedByOtu = sampleList.sort((a,b) => b.sample_values - a.sample_values);

// Slice top 10 from sortedByOtu array
let slicedOtu = sortedByOtu.slice(0,10);

// Declair variables for plots
let sampleId = sortedByOtu.id
let sampleOtuIds = sortedByOtu.otu_id
let sampleOtuLabels = sortedByOtu.otu_labels
let sampleValues = sortedByOtu.sample_values


// Initializes the page with a default plot
function init() {
    data = [{
      x: 
      y: 
      text: 
      name: 
      type: "bar",
      orientation: "h"
    }];
  
    Plotly.newPlot("plot", data);
    }
  
  // Call optionChanged when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", optionChanged);
  
  // This function is called when a dropdown menu item is selected
  function optionChanged() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    let x = [];
    let y = [];
  
    if (dataset === 'dataset1') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    else if (dataset === 'dataset2') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();

// Create bubble charts
  