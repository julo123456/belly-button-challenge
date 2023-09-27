
// D3 reads in JSON file via URL.
var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Fetch the JSON data and console log it.
d3.json(url).then(function(data) {
  console.log('data',data); 
  console.log('data.samples', data.samples);
  console.log(data.samples[0]);
  console.log('data.names', data.names);
  console.log(data.samples[1].sample_values);
  
});
  function chart(sampleId){d3.json(url).then(function(data) {
    let sampleData = data.samples
    result = sampleData.filter(id => id.id ===sampleId)[0]
    console.log(result);
    let sample_values = result.sample_values
    let otu_ids = result.otu_ids

   // Plotting horizontal bar chart
   let trace = {
    x: sample_values.slice(0,10).reverse(),
    y: otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
    type: 'bar',
    orientation: 'h'

   };
   // Layout for horizontal bar chart
   let layout = {
    xaxis: {
      title:{
        text:"OTU ID versus OTU values"
      }
    }
   };

    // Plotting bubble chart
    let trace1 = {
      x: otu_ids,
      y: sample_values,
      type: 'scatter',
      mode: "markers",
      marker :{
        size: sample_values,
        color: otu_ids
      }

    };
    // Layout for bubble chart
    let layout1 = {
      xaxis: {
        title: {
          text: "OTU ID"
        }
      }
    };
  
    let barPlot = [trace];
    let bubblePlot= [trace1];
    Plotly.newPlot('bar', barPlot,layout);
    Plotly.newPlot("bubble", bubblePlot,layout1);
  });
}
  function init(){d3.json(url).then(function(data) {
    let dropdownMenu = d3.select("#selDataset");
    for (let j = 0; j < data.names.length; j++) {
      dropdownMenu.append("option").text(data.names[j]).property("value", data.names[j]);
    }
  chart(data.names[0]);
    
  })}
  
  function optionChanged(op){
    chart(op)
  }
  init();