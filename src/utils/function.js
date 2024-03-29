import { clearAllBodyScrollLocks } from "body-scroll-lock";

const truncateName = (name, limit) => {
  limit = limit ?? 10;
  return (name ?? "").length > limit ? name.slice(0, limit - 1) + "..." : name;
};

var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

function abbreviateNumber(number) {
  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.checked = false;
  clearAllBodyScrollLocks();
}

export { truncateName, abbreviateNumber, closeModal };
