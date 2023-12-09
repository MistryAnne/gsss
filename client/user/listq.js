let activeSurveys = [];
const listQ = async() => {
try {
  const response = await fetch('http://localhost:3000/api/surveys', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  console.log(data);
  activeSurveys.push.apply(activeSurveys, data)
  console.log("data2: " + activeSurveys)
} catch (error) {
  console.error('Error:', error);
}
console.log("ac: " + JSON.stringify(activeSurveys))
return activeSurveys
}
export default listQ