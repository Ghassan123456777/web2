document.getElementById('analyzeButton').addEventListener('click', function () {
  const boneDensity = parseFloat(document.getElementById('boneDensity').value);
  const muscleMass = parseFloat(document.getElementById('muscleMass').value);
  const manualForce = parseFloat(document.getElementById('impactForce').value);

  let impactForce;

  // Check if manual force is provided
  if (!isNaN(manualForce) && manualForce > 0) {
    impactForce = manualForce;
  } else if (!isNaN(boneDensity) && !isNaN(muscleMass) && boneDensity > 0 && muscleMass > 0) {
    // Calculate impact force from bone density and muscle mass
    impactForce = boneDensity * muscleMass * 10; // Example formula
  } else {
    alert('Please enter either valid Bone Density and Muscle Mass, or a valid Impact Force.');
    return;
  }

  // Display the result
  const resultDiv = document.getElementById('result');
  if (impactForce < 100) {
    resultDiv.textContent = Weak Impact Force: ${impactForce.toFixed(2)} N;
    resultDiv.className = 'result weak';
  } else if (impactForce < 300) {
    resultDiv.textContent = Medium Impact Force: ${impactForce.toFixed(2)} N;
    resultDiv.className = 'result medium';
  } else {
    resultDiv.textContent = Strong Impact Force: ${impactForce.toFixed(2)} N;
    resultDiv.className = 'result strong';
  }
});