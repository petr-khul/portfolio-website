function calculateAge(birthDate){
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
      }
    
      return age;
    }

const birthDate = "1994-12-06";
document.getElementById("age").textContent = calculateAge(birthDate);