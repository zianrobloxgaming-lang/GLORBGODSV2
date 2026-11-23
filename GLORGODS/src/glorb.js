const plantSizes = {
  small: {
    label: "Small plants",
    waterPerSquareMeter: 0.035,
  },
  medium: {
    label: "Medium plants",
    waterPerSquareMeter: 0.045,
  },
  large: {
    label: "Large plants",
    waterPerSquareMeter: 0.06,
  },
};

function formatNumber(value, maximumFractionDigits = 2) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  });
}

export function initializeInsecticideCalculator() {
  const plantSizeSelect = document.querySelector("#plant-size");
  const rateSelect = document.querySelector("#application-rate");
  const areaSelect = document.querySelector("#farm-area");

  if (!plantSizeSelect || !rateSelect || !areaSelect) return;

  const gramsAnswer = document.querySelector("#grams-answer");
  const kilogramsAnswer = document.querySelector("#kilograms-answer");
  const waterAnswer = document.querySelector("#water-answer");

  function calculate() {
    const plant = plantSizes[plantSizeSelect.value];
    const rate = Number(rateSelect.value);
    const area = Number(areaSelect.value);
    const totalWater = plant.waterPerSquareMeter * area;
    const insecticideGrams = totalWater * rate;
    const insecticideKilograms = insecticideGrams / 1000;

    gramsAnswer.textContent = `${formatNumber(insecticideGrams)} g`;
    kilogramsAnswer.textContent = `${insecticideKilograms.toFixed(2)} kg`;
    waterAnswer.textContent = `${formatNumber(totalWater)} L`;
  }

  plantSizeSelect.addEventListener("change", calculate);
  rateSelect.addEventListener("change", calculate);
  areaSelect.addEventListener("change", calculate);
  calculate();
}
