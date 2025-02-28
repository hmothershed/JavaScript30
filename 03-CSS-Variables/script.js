const inputs = document.querySelectorAll('.controls input');
function handleUpdate(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('input', handleUpdate)); 

const photo = document.querySelector('.photo');

photo.addEventListener('click', resetValues);

const root = document.documentElement;
const styles = getComputedStyle(root);
const baseColor = styles.getPropertyValue('--base');

function resetValues() {
  inputs.forEach(input => {
    console.log(input.type);
    if (input.type === 'range') {
      input.value = 0;
      document.documentElement.style.setProperty(`--${input.name}`, '0');
    }
    else {
      input.value = baseColor;
      document.documentElement.style.setProperty(`--${input.name}`, baseColor);
    }
  });
}
