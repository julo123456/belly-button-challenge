
// D3 reads in JSON file via URL.
var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Fetch the JSON data and console log it.
d3.json(url).then(function(data) {
  console.log('data',data); 
  console.log('data.samples', data.samples);
  console.log(data.samples[0]);
  console.log('data.names', data.names);
  console.log(data.samples[1].sample_values);


   // Plotting horizontal bar chart
   let trace = {
    x: data.samples[0].sample_values.slice(0,10),
    y: data.names[0],
    type: 'bar',
    orientation: 'horizontal'
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
      x: data.samples[0].otu_ids,
      y: data.samples[0].sample_values,
      type: 'scatter',
      mode: "markers",
      marker :{
        size: data.samples[0].sample_values,
        color: data.samples[0].otu.ids,
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
    plotly.newPlot('bar', barPlot,layout)
    Plotly.newPlot("bubble", bubblePlot,layout1);
 
  

  
});