let time = document.getElementById("current_time")

setInterval(()=>{
    let d= new Date();
time.innerHTML= d.toLocaleTimeString();
    
}, 1000);



    const colors = [  '#CA498C', '#FDE3DF', '#ECBFCE', '#801F6D', '#B977A6'];
const data = [  400, 200, 100, 100, 50];
const labels = [];

// Create the first pie chart
new Chart('pieChart', {
type: 'pie',
data: {
  labels,
  datasets: [{
    data,
    backgroundColor: colors,
  }]
},
options: {
  responsive: true,
}
});
